// 从第 32 章提取
// 代码清单: fetchUser 函数
// 文件名: chapter32_fetchUser.ts
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      return { success: false, error: new Error('User not found') };
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error as Error };
  }
}

// 使用
const result = await fetchUser('123');
if (result.success) {
  console.log(result.data.name);
} else {
  console.error(result.error.message);
}
