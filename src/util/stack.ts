import type { MouseSettings } from '../types';

interface StackItem {
  id: number;
  options: MouseSettings;
}

export class Stack {
  private stack: StackItem[];
  private currentId: number;

  constructor() {
    this.stack = [];
    this.currentId = 0;
  }

  push(options: MouseSettings): number {
    const item: StackItem = {
      id: this.currentId,
      options: { ...options },
    };
    this.stack.push(item);
    this.currentId++;
    return this.currentId;
  }

  pop(id: number): MouseSettings | undefined {
    let removedOptions: MouseSettings | undefined;
    if (id > this.currentId) return undefined;
    while (this.stack.length > 0) {
      const item = this.stack.pop();
      if (item.id === id) {
        removedOptions = item.options;
        break;
      }
    }

    return removedOptions;
  }

  peek(): MouseSettings | undefined {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1].options;
    }
    return undefined;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  clear(): void {
    this.stack = [];
    this.currentId = 0;
  }

  size(): number {
    return this.stack.length;
  }
}
