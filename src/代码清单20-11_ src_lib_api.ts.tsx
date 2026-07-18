// src/lib/api.ts
async function fetchJSON<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

// 使用示例
export async function getPosts() {
  return fetchJSON<Post[]>('/api/posts');
}

export async function getPost(id: string) {
  return fetchJSON<Post>(`/api/posts/${id}`);
}

export async function createPost(data: CreatePostInput) {
  return fetchJSON<Post>('/api/posts', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}