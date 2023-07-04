import { useContext } from 'react';
import { MousePropertiesContext } from '../context/mouse.context.js';

export function useControlOptions() {
  const { addLayer, removeLayer, clearStack, logStack, peekStack } = useContext(MousePropertiesContext);
  return {
    addOptionLayer: addLayer,
    removePreviousLayer: removeLayer,
    clearLayers: clearStack,
    logLayers: logStack,
    topLayer: peekStack,
  };
}
