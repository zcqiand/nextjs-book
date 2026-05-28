// 从第 38 章提取
// 代码清单: Client Component 标记
// 文件名: chapter38_FileUploader.tsx
'use client';

import { useState, useTransition } from 'react';
import { uploadFile } from '@/app/actions/upload';

export function FileUploader({ projectId }: { projectId: string }) {
  const [progress, setProgress] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  async function handleUpload(formData: FormData) {
    formData.set('projectId', projectId);

    startTransition(async () => {
      // 模拟进度更新（实际需要 WebSocket 或轮询）
      const interval = setInterval(() => {
        setProgress(p => Math.min(p + 10, 90));
      }, 500);

      const result = await uploadFile(formData);

      clearInterval(interval);
      setProgress(100);

      if (result.success) {
        setUploadedUrl(result.attachment?.url || null);
        setTimeout(() => setProgress(0), 1000);
      }
    });
  }

  return (
    <form action={handleUpload}>
      <input type="file" name="file" />
      {isPending && (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {uploadedUrl && (
        <a href={uploadedUrl} target="_blank">查看上传的文件</a>
      )}
    </form>
  );
}
