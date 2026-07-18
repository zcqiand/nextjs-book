// src/lib/api.ts
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchWithError<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    let errorMessage = `Request failed: ${response.status}`;
    let errorCode: string | undefined;

    try {
      const errorBody = await response.json();
      errorMessage = errorBody.message || errorMessage;
      errorCode = errorBody.code;
    } catch {
      // 忽略 JSON 解析错误
    }

    throw new ApiError(errorMessage, response.status, errorCode);
  }

  return response.json();
}