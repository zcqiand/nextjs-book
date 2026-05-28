// 从第 23 章提取
// 代码清单: src/lib/__tests__/format.test.ts
// 文件名: chapter23_src_lib.ts
// src/lib/__tests__/format.test.ts
import { formatDate, slugify } from '../format';

describe('formatDate', () => {
  it('格式化中文日期', () => {
    const date = new Date('2024-01-15');
    expect(formatDate(date, 'zh-CN')).toBe('2024年1月15日');
  });

  it('格式化英文日期', () => {
    const date = new Date('2024-03-20');
    expect(formatDate(date, 'en-US')).toBe('March 20, 2024');
  });

  it('处理无效日期', () => {
    const date = new Date('invalid');
    expect(formatDate(date)).toBe('Invalid Date');
  });
});

describe('slugify', () => {
  it('基本转换', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('处理特殊字符', () => {
    expect(slugify('Hello! World?')).toBe('hello-world');
  });

  it('处理多空格和下划线', () => {
    expect(slugify('hello   world_test')).toBe('hello-world-test');
  });

  it('移除首尾横线', () => {
    expect(slugify('  hello world  ')).toBe('hello-world');
  });
});
