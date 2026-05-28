// 从第 38 章提取
// 代码清单: Server Action 标记
// 文件名: chapter38_uploadFile.tsx
// src/app/actions/upload.ts
'use server';

import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { db } from '@/lib/db';
import { revalidateTag } from 'next/cache';

const UPLOAD_DIR = join(process.cwd(), 'public', 'uploads');

export async function uploadFile(formData: FormData) {
  const file = formData.get('file') as File;
  const projectId = formData.get('projectId') as string;

  if (!file || !projectId) {
    return { success: false, error: '缺少文件或项目 ID' };
  }

  // 验证文件类型
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
  if (!allowedTypes.includes(file.type)) {
    return { success: false, error: '不支持的文件类型' };
  }

  // 验证文件大小（10MB）
  if (file.size > 10 * 1024 * 1024) {
    return { success: false, error: '文件大小超过 10MB' };
  }

  // 生成唯一文件名
  const ext = file.name.split('.').pop();
  const filename = `${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;

  // 确保目录存在
  await mkdir(UPLOAD_DIR, { recursive: true });

  // 写入文件
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  await writeFile(join(UPLOAD_DIR, filename), buffer);

  // 保存到数据库
  const attachment = await db.attachment.create({
    data: {
      filename,
      originalName: file.name,
      mimeType: file.type,
      size: file.size,
      projectId,
      url: `/uploads/${filename}`,
    },
  });

  revalidateTag(`project-attachments-${projectId}`);

  return { success: true, attachment };
}
