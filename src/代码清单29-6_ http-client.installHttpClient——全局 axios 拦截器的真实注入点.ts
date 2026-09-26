let interceptorId: number | null = null;
export function installHttpClient(getToken: () => string | null): void {
  // 测试环境可能把 axios mock 成无拦截器面的对象 —— 引导装不上就跳过，
  // 别让模块加载炸掉（真实 axios 恒有 interceptors）。
  if (!axios?.interceptors?.request?.use) return;
  if (interceptorId !== null) {
    axios.interceptors.request.eject(interceptorId);
  }
  interceptorId = axios.interceptors.request.use((config) => {
    if (!config.baseURL) {
      config.baseURL = getApiBaseUrl();
    }

    // ……（省略）……

    const token = getToken();
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  });
}