// 从第 28 章提取
// 代码清单: doubleCountAtom 组件
// 文件名: chapter28_Counter_2.ts
import { atom, useAtom } from 'jotai';

// 基础原子
const countAtom = atom(0);
const userAtom = atom<User | null>(null);

// 派生原子
const doubleCountAtom = atom((get) => get(countAtom) * 2);
const isLoggedInAtom = atom((get) => get(userAtom) !== null);

// 使用
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  const [doubleCount] = useAtom(doubleCountAtom);

  return (
    <div>
      <p>计数: {count}</p>
      <p>双倍: {doubleCount}</p>
      <button onClick={() => setCount(c => c + 1)}>增加</button>
    </div>
  );
}
