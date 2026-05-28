// 从第 23 章提取
// 代码清单: src/components/button.test.tsx
// 文件名: chapter23_src_components.ts
// src/components/button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>点击我</Button>);
    expect(screen.getByRole('button', { name: '点击我' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>点击我</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        禁用
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies variant classes', () => {
    const { rerender } = render(<Button variant="primary">主要</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-blue-600');

    rerender(<Button variant="secondary">次要</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gray-200');
  });
});
