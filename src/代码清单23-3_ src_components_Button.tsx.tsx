// src/components/Button.tsx
'use client';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-gray-200 text-gray-900',
};

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  const classes = ['px-4 py-2 rounded', variantClasses[variant], className]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}