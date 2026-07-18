// components/Modal.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // 延迟添加可见类，让初始渲染先隐藏
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  return (
    <div
      className={`${styles.overlay} ${visible ? styles.visible : ''}`}
      onClick={onClose}
    >
      <div
        className={`${styles.modal} ${visible ? styles.visible : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}