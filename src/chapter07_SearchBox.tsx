// 从第 7 章提取
// 代码清单: Client Component 标记
// 文件名: chapter07_SearchBox.tsx
'use client';

import { useEffect, useState } from 'react';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      setResults(data);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      {loading ? (
        <div>搜索中...</div>
      ) : (
        <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>
      )}
    </div>
  );
}
