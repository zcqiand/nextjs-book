// 从第 38 章提取
// 代码清单: Client Component 标记
// 文件名: chapter38_CartItemRow.tsx
'use client';

import { useOptimistic } from 'react';
import { updateQuantity, removeItem } from '@/app/actions/cart';
import { CartItem } from '@/lib/types';

export function CartItemRow({ item }: { item: CartItem }) {
  const [optimisticItem, setOptimisticItem] = useOptimistic(
    item,
    (state, update: { quantity?: number; removed?: boolean }) => {
      if (update.removed) return null;
      return { ...state, ...update };
    }
  );

  async function handleQuantityChange(newQuantity: number) {
    if (newQuantity < 1) {
      startTransition(() => setOptimisticItem({ removed: true }));
      await removeItem(item.id);
    } else {
      startTransition(() => setOptimisticItem({ quantity: newQuantity }));
      await updateQuantity(item.id, newQuantity);
    }
  }

  if (!optimisticItem) return null;

  return (
    <div className="flex items-center gap-4">
      <span>{optimisticItem.name}</span>
      <input
        type="number"
        value={optimisticItem.quantity}
        onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
      />
      <span>${optimisticItem.price * optimisticItem.quantity}</span>
    </div>
  );
}
