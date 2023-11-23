import useMouseStore from '../store/index.js';

export function useControlOptions() {
  const store = useMouseStore((state) => ({
    topLayer: state.layers[state.layers.length > 0 ? state.layers.length - 1 : null],
    addOptionLayer: state.pushLayer,
    removePreviousLayer: state.popLayer,
    clearLayers: state.clearLayers,
    log: state.log,
  }));

  return {
    ...store,
  };
}
