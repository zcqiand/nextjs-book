// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';

describe('vi.fn 与 vi.spyOn', () => {
  it('vi.fn 记录调用与参数', () => {
    const onChange = vi.fn();
    onChange('hello');
    onChange('world', 42);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenNthCalledWith(1, 'hello');
    expect(onChange).toHaveBeenNthCalledWith(2, 'world', 42);
  });

  it('vi.fn 可以预设返回值', async () => {
    const fetchUser = vi.fn().mockResolvedValue({ id: 1, name: '张三' });
    const user = await fetchUser(1);
    expect(user.name).toBe('张三');
  });

  it('vi.spyOn 监听对象方法', () => {
    const logger = { info: (msg: string) => msg };
    const spy = vi.spyOn(logger, 'info').mockImplementation(() => 'mocked');

    const result = logger.info('原始调用');

    expect(spy).toHaveBeenCalledWith('原始调用');
    expect(result).toBe('mocked');
    spy.mockRestore();
  });

  it('vi.useFakeTimers 控制时间相关代码', () => {
    vi.useFakeTimers();
    const cb = vi.fn();
    setTimeout(cb, 1000);

    vi.advanceTimersByTime(999);
    expect(cb).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(cb).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });
});