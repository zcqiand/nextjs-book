export function fnTest(ids: string[], name: string, body: () => void | Promise<void>) {
  return base(name, (ctx) => {
    ctx.task.meta.fn = ids;
    return body();
  });
}