'use client';
import { useState, startTransition } from 'react';
import { archiveTask } from '@/app/actions';

export default function ArchiveButton({ taskId }: { taskId: string }) {
  const [archived, setArchived] = useState(false);
  // 非表单场景直接调用 Server Action 时包一层 startTransition：
  // React 把这次调用标记为过渡，服务端执行期间维持旧 UI，避免点击后界面「闪断」
  const handleArchive = () => {
    startTransition(async () => {
      await archiveTask(taskId);
      setArchived(true);
    });
  };
  return (
    <button onClick={handleArchive} disabled={archived}>
      {archived ? '已归档' : '归档任务'}
    </button>
  );
}