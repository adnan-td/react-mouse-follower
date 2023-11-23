import useMouseStore from '../store/index.js';

export function useControlOptions() {
  const store = useMouseStore((state) => ({
    addOptionLayer: state.pushLayer,
    removePreviousLayer: state.popLayer,
    clearLayers: state.clearLayers,
  }));

  return {
    // logLayers: logStack,
    ...store,
  };
}
