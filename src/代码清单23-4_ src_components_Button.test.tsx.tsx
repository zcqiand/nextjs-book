// src/components/Button.test.tsx
// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('渲染文本与默认 variant', () => {
    render(<Button>点击我</Button>);
    const button = screen.getByRole('button', { name: '点击我' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-600');
  });

  it('variant=secondary 时切换样式', () => {
    render(<Button variant="secondary">次要</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gray-200');
  });

  it('点击触发 onClick 回调', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>点击</Button>);

    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled 时点击不会触发 onClick', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>禁用</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});