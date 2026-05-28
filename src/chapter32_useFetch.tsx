// 从第 32 章提取
// 代码清单: 自定义 Hook 调试 fetch
// 文件名: chapter32_useFetch.tsx
// 自定义 Hook 调试 fetch
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('Fetching:', url);
        const response = await fetch(url);

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();
        console.log('Response data:', result);

        setData(result);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, error, loading };
}
