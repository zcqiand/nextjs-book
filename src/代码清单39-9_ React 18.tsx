// React 18
import { useState, useEffect } from 'react';

function Component({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/data/${id}`)
      .then(res => res.json())
      .then(setData);
  }, [id]);

  return <div>{data}</div>;
}

// React 19 推荐方式：Server Component
async function Component({ id }) {
  const data = await fetch(`/api/data/${id}`).then(res => res.json());
  return <div>{data}</div>;
}