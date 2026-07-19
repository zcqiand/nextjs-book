// 不好：广告或动态内容会导致布局偏移
{showAd && <AdBanner />}

// 好：使用骨架屏或固定高度占位
<div style={{ minHeight: '90px' }}>
  {showAd ? <AdBanner /> : <Placeholder />}
</div>