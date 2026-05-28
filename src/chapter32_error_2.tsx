// 从第 32 章提取
// 代码清单: src/components/with-error-boundary.tsx
// 文件名: chapter32_error_2.tsx
// src/components/with-error-boundary.tsx
import { Component, ReactNode } from 'react';

function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode
) {
  return class extends Component<P, { hasError: boolean; error?: Error }> {
    constructor(props: P) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, error };
    }

    render() {
      if (this.state.hasError) {
        return fallback || <div>出错了</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}
