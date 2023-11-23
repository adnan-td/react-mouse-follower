// import { create } from 'zustand';
import { create, StateCreator, StoreApi, SetState, GetState } from 'zustand';
import { MouseSettings } from '../types/index.js';

interface useMouseStoreInterface {
  curSettings: MouseSettings;
  layers: MouseSettings[];

  pushLayer: (newLayer: MouseSettings) => void;
  popLayer: () => void;
  clearLayers: () => void;
}

const log =
  (config: StateCreator<useMouseStoreInterface>) =>
  (set: SetState<useMouseStoreInterface>, get: GetState<useMouseStoreInterface>, api: StoreApi<useMouseStoreInterface>) =>
    config(
      (args) => {
        console.log('  applying', args);
        set(args);
        console.log('  new state', get());
      },
      get,
      api,
    );

const useMouseStore = create<useMouseStoreInterface>(
  log((set) => ({
    curSettings: {},
    layers: [],

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
  })),
);

export default useMouseStore;
