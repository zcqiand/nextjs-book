let currentToken: string | null = null;
let unauthorizedHandler: (() => void) | null = null;

export function setToken(token: string | null) {
  currentToken = token;
}
// …（onUnauthorized / resetApiClient / identityClient 略）

// @entry M01.F05.I02
//   apiClient / identityClient 请求拦截器：注入 Authorization: Bearer <token>
//   响应拦截器：401 调 unauthorizedHandler（路由守卫跳 /login）
apiClient.interceptors.request.use((config) => {
  if (!config.baseURL) config.baseURL = getApiBaseUrl() || "";
  if (currentToken) config.headers.set("Authorization", `Bearer ${currentToken}`);
  return config;
});
// …（identityClient 拦截器略）
for (const client of [apiClient, identityClient]) {
  client.interceptors.response.use(
    (r) => r,
    (err: unknown) => {
      if (err instanceof AxiosError && err.response?.status === 401)
        unauthorizedHandler?.();
      return Promise.reject(err);
    },
  );
}