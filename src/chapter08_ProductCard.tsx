// 从第 8 章提取
// 代码清单: 使用 Tailwind 布局和间距，CSS Modules 处理复杂细节
// 文件名: chapter08_ProductCard.tsx
// 使用 Tailwind 布局和间距，CSS Modules 处理复杂细节
export default function ProductCard({ product }) {
  return (
    <div className={styles.container}>
      <div className="relative aspect-square">
        <Image src={product.image} alt={product.name} fill />
      </div>
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>¥{product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        购买
      </button>
    </div>
  );
}
