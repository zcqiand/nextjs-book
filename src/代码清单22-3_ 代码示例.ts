class DataStore<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T | undefined {
    return this.items[index];
  }

  filter(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }
}

// 使用
const stringStore = new DataStore<string>();
stringStore.add('hello');
stringStore.add('world');

const numberStore = new DataStore<number>();
numberStore.add(42);