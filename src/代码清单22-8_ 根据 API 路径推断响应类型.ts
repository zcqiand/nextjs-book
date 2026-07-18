// 根据 API 路径推断响应类型
type ApiRoutes = {
  '/users': { id: string; name: string }[];
  '/users/:id': { id: string; name: string; email: string };
  '/posts': { id: string; title: string }[];
  '/posts/:id': { id: string; title: string; content: string };
};

type ApiResponse<P extends keyof ApiRoutes> = ApiRoutes[P];

async function fetchApi<P extends keyof ApiRoutes>(
  path: P
): Promise<ApiResponse<P>> {
  const response = await fetch(path);
  return response.json();
}

// 使用
const users = await fetchApi('/users');
// 类型自动推断为: { id: string; name: string }[]

const post = await fetchApi('/posts/:id');
// 类型自动推断为: { id: string; title: string; content: string }