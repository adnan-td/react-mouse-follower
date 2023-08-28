import { create } from 'zustand';
import { MouseSettings } from '../types/index.js';

const defaultSettings: MouseSettings = {
  radius: 12 / 2,
};

interface useMouseStoreInterface {
  curSettings: MouseSettings;
  layers: [MouseSettings];

  pushLayer: (newLayer: MouseSettings) => void;
  popLayer: () => void;
  clearLayers: () => void;
}

const useMouseStore = create<useMouseStoreInterface>((set) => ({
  curSettings: defaultSettings,
  layers: [defaultSettings],

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
        return { layers: [defaultSettings], curSettings: defaultSettings };
      }
    }),
  clearLayers: () =>
    set((state) => {
      return { layers: [defaultSettings], curSettings: defaultSettings };
    }),
}));

export default useMouseStore;
