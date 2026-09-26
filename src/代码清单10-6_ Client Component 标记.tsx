// src/app/product/template.tsx
'use client';

import { useEffect } from 'react';

export default function ProductTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 每次进入产品页面时播放入场动画
    const productCard = document.querySelector('.product-card');
    productCard?.animate([
      { opacity: 0, transform: 'translateY(20px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 300,
      easing: 'ease-out'
    });
  }, []);

  return <div className="product-card">{children}</div>;
}