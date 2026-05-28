// 从第 28 章提取
// 代码清单: 代码示例
// 文件名: chapter28_usePreferencesStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
}

interface PreferencesState extends UserPreferences {
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: string) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'zh-CN',
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'user-preferences', // localStorage key
    }
  )
);
