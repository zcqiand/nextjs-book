// 从第 21 章提取
// 代码清单: 在任何微应用中
// 文件名: chapter21_MyForm.ts
// 在任何微应用中
import { Button, Input, Modal } from '@shared/ui';

function MyForm() {
  return (
    <form>
      <Input label="用户名" name="username" />
      <Button type="submit">提交</Button>
    </form>
  );
}
