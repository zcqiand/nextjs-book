// 从第 19 章提取
// 代码清单: 始终为图片指定宽高
// 文件名: chapter19_始终为图片指定宽高.ts
// 始终为图片指定宽高
<Image
  src="/photo.jpg"
  width={800}
  height={600}
  alt="Photo"
  style={{ width: '100%', height: 'auto' }} // 保持宽高比
/>
