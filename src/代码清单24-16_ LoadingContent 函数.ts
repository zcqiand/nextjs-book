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