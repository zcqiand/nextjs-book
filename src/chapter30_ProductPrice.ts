// 从第 30 章提取
// 代码清单: ProductPrice 函数
// 文件名: chapter30_ProductPrice.ts
import { getFormatter } from 'next-intl/server';

function ProductPrice({ price }: { price: number }) {
  const format = await getFormatter();

  return (
    <span>
      {format.number(price, {
        style: 'currency',
        currency: 'CNY',
      })}
    </span>
  );
}
