// 从第 24 章提取
// 代码清单: src/components/modal.tsx
// 文件名: chapter24_Modal.ts
// src/components/modal.tsx
import { useEffect, useRef } from 'react';

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement as HTMLElement;

    // 将焦点移到模态框
    modalRef.current?.focus();

    return () => {
      // 关闭时恢复之前的焦点
      previousActiveElement?.focus();
    };
  }, [isOpen]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
      tabIndex={-1}
    >
      <h2 id="modal-title">模态框标题</h2>
      {children}
      <button onClick={onClose}>关闭</button>
    </div>
  );
}
