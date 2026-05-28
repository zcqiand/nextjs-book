// 从第 28 章提取
// 代码清单: 创建 Context
// 文件名: chapter28_ThemeProvider.tsx
// 创建 Context
const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
} | null>(null);

// Provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  function toggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 使用
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  return (
    <button onClick={toggleTheme}>
      当前主题: {theme}
    </button>
  );
}
