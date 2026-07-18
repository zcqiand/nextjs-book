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