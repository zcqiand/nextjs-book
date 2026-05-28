// 从第 19 章提取
// 代码清单: 不好：广告或动态内容会导致布局偏移
// 文件名: chapter19_不好_广告或动态内容会导致布局偏移.ts
// 不好：广告或动态内容会导致布局偏移
{showAd && <AdBanner />}

// 好：使用骨架屏或固定高度占位
<div style={{ minHeight: '90px' }}>
  {showAd ? <AdBanner /> : <Placeholder />}
</div>
