// import { create } from 'zustand';
import { create, StateCreator, StoreApi, SetState, GetState } from 'zustand';
import { MouseSettings } from '../types/index.js';

interface useMouseStoreInterface {
  curSettings: MouseSettings;
  layers: MouseSettings[];
  logging: boolean;

  pushLayer: (newLayer: MouseSettings) => void;
  popLayer: () => void;
  clearLayers: () => void;
  log: () => void;
}

const log =
  (config: StateCreator<useMouseStoreInterface>) =>
  (set: SetState<useMouseStoreInterface>, get: GetState<useMouseStoreInterface>, api: StoreApi<useMouseStoreInterface>) =>
    config(
      (args) => {
        const prev = get();
        if (prev.logging) {
          console.log('  applying', args);
          set(args);
          console.log('  new state', get());
        } else {
          set(args);
        }
      },
      get,
      api,
    );

const useMouseStore = create<useMouseStoreInterface>(
  log((set) => ({
    curSettings: {},
    layers: [],
    logging: false,

    pushLayer: (newLayer: MouseSettings) =>
      set((state) => {
        const newCur = { ...state.curSettings, ...newLayer };
        state.layers.push(newCur);
        return { layers: state.layers, curSettings: newCur };
      }),
    popLayer: () =>
      set((state) => {
        if (state.layers.length > 1) {
          state.layers.pop();
          return { layers: state.layers, curSettings: state.layers.at(state.layers.length - 1) };
        } else {
          return { layers: [], curSettings: {} };
        }
      }),
    clearLayers: () =>
      set((state) => {
        return { layers: [], curSettings: {} };
      }),
    log: () =>
      set((state) => {
        return { logging: !state.logging };
      }),
  })),
);

export default useMouseStore;
