// 从第 28 章提取
// 代码清单: 使用
// 文件名: chapter28_Counter.ts
// 使用
function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>重置</button>
    </div>
  );
}
