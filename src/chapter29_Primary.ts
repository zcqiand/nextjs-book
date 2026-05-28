// 从第 29 章提取
// 代码清单: src/components/ui/button.stories.tsx
// 文件名: chapter29_Primary.ts
// src/components/ui/button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '主要按钮',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '次要按钮',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: '加载中',
  },
};
