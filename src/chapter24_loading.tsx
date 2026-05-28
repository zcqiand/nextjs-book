// 从第 24 章提取
// 代码清单: LoadingContent 函数
// 文件名: chapter24_loading.tsx
function LoadingContent() {
  return (
    <div aria-busy="true" aria-label="加载中">
      <div className="skeleton" />
      <div className="skeleton" />
      <div className="skeleton" />
    </div>
  );
}

// 加载完成后的通知
function LoadedContent() {
  return (
    <div aria-live="polite">
      <span className="sr-only">
        内容已加载完成
      </span>
      {/* 实际内容 */}
    </div>
  );
}
