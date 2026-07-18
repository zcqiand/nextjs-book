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