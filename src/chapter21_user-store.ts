// 从第 21 章提取
// 代码清单: shared/store/user-store.ts
// 文件名: chapter21_user-store.ts
// shared/store/user-store.ts
import { create } from 'zustand';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
