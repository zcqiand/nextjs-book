// 从第 35 章提取
// 代码清单: app/(feed)/@modal/(.)photo/[id]/page.tsx
// 文件名: chapter35_page_2.tsx
// app/(feed)/@modal/(.)photo/[id]/page.tsx
// 拦截 /photo/:id 并在 modal 中显示
export default function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  return <div className="modal">Photo {params.id}</div>;
}

// app/(feed)/photo/[id]/page.tsx
// 实际的照片页面
export default function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  return <div>Full Photo {params.id}</div>;
}
