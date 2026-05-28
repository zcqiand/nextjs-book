// 从第 22 章提取
// 代码清单: Next.js 风格的 API 响应类型
// 文件名: chapter22_createApiResponse.ts
// Next.js 风格的 API 响应类型
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}

// 创建 API 响应
function createApiResponse<T>(data: T, message = 'Success'): ApiResponse<T> {
  return {
    data,
    status: 200,
    message,
    timestamp: Date.now(),
  };
}

// 分页响应
interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

function createPaginatedResponse<T>(
  data: T[],
  page: number,
  pageSize: number,
  total: number
): PaginatedResponse<T> {
  return {
    data,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  };
}
