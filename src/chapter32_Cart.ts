// 从第 32 章提取
// 代码清单: useDebugStore 组件
// 文件名: chapter32_Cart.ts
import { useEffect } from 'react';

// 调试 Zustand Store
const useDebugStore = (store: any) => {
  useEffect(() => {
    console.log('Store state:', store.getState());
    const unsubscribe = store.subscribe((state: any) => {
      console.log('State changed:', state);
    });
    return unsubscribe;
  }, [store]);
};

// 使用
function Cart() {
  const cart = useCartStore();

  // 添加调试
  useDebugStore(useCartStore);

  return (
    <div>
      <h2>购物车 ({cart.items.length} 件商品)</h2>
    </div>
  );
}
