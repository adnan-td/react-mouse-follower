import { useState } from 'react';
import type { MouseSettings } from '../types/index.js';

export const useStack = (
  defaultMouseProperties: MouseSettings,
): {
  stack: MouseSettings[];
  push: (options: MouseSettings) => void;
  pop: () => MouseSettings | undefined;
  peek: () => MouseSettings | undefined;
  isEmpty: () => boolean;
  clear: () => void;
  size: () => number;
  logStack: () => void;
} => {
  const [stack, setStack] = useState<MouseSettings[]>([defaultMouseProperties]);

  const push = (options: MouseSettings): void => {
    const item: MouseSettings = {
      ...options,
    };
    setStack((prevStack) => [...prevStack, item]);
  };

  const pop = (): MouseSettings | undefined => {
    const item = stack.pop();
    setStack([...stack]);
    return item;
  };

  const peek = (): MouseSettings | undefined => {
    if (stack.length > 0) {
      return stack[stack.length - 1];
    }
    return undefined;
  };

  const isEmpty = (): boolean => {
    return stack.length === 0;
  };

  const clear = (): void => {
    setStack([{}]);
  };

  const size = (): number => {
    return stack.length;
  };

  const logStack = (): void => {
    console.log(stack);
  };

  return {
    stack,
    push,
    pop,
    peek,
    isEmpty,
    clear,
    size,
    logStack,
  };
};
