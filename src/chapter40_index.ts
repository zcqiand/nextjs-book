// 从第 40 章提取
// 代码清单: features/auth/index.ts
// 文件名: chapter40_index.ts
// features/auth/index.ts
export { LoginForm } from './components/login-form';
export { RegisterForm } from './components/register-form';
export { login, logout, register } from './actions/auth';
export { useAuth, useRequireAuth } from './hooks/use-auth';
export type { AuthUser } from './types';
