// 从第 33 章提取
// 代码清单: 为图片预留空间
// 文件名: chapter33_为图片预留空间.ts
// 为图片预留空间
<Image
  src={post.coverImage}
  width={800}
  height={400}
  style={{ width: '100%', height: 'auto' }} // 保持宽高比
/>

// 避免动态插入内容
// 不好：
{showAd && <AdBanner />}

// 好：
<div style={{ minHeight: showAd ? 'auto' : '90px' }}>
  {showAd ? <AdBanner /> : <Placeholder />}
</div>
