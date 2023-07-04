import { useEffect, useState } from 'react';
import type { MouseSettings } from '../types/index.js';

const defaultMouseProperties: MouseSettings = {
  radius: 12 / 2,
};

export const useStack = (): {
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
    setStack((prevStack) => {
      const item: MouseSettings = {
        ...defaultMouseProperties,
        ...prevStack[prevStack.length - 1],
        ...options,
      };
      return [...prevStack, item];
    });
  };

  const pop = (): MouseSettings | undefined => {
    let item = {};
    setStack((prevStack) => {
      item = prevStack.pop();
      return [...prevStack];
    });
    return item;
  };

  const peek = (): MouseSettings | undefined => {
    if (stack.length > 0) {
      return stack[stack.length - 1];
    }
    return defaultMouseProperties;
  };

  const isEmpty = (): boolean => {
    return stack.length === 0;
  };

  const clear = (): void => {
    setStack([]);
  };

  const size = (): number => {
    return stack.length;
  };

  const logStack = (): void => {
    console.log('logging all layers');
    stack.forEach((item, i) => {
      console.log(i, item);
    });
  };

  // useEffect(() => {
  //   logStack();
  // }, [stack]);

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