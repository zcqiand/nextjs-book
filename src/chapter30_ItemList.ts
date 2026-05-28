// 从第 30 章提取
// 代码清单: ItemList 函数
// 文件名: chapter30_ItemList.ts
import { getTranslations } from 'next-intl/server';

function ItemList({ count }: { count: number }) {
  const t = await getTranslations('item');

  return (
    <p>
      {t('item', { count })}
      {/* count=1: "1 item" */}
      {/* count=5: "5 items" */}
    </p>
  );
}
