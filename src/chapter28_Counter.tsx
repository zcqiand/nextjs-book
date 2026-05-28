// 从第 28 章提取
// 代码清单: 基础用法
// 文件名: chapter28_Counter.tsx
// 基础用法
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(c => c - 1)}>减少</button>
    </div>
  );
}

// 复杂状态
function UserForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: 0,
  });

  function updateField(field: string, value: string | number) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  return (
    <form>
      <input
        value={form.name}
        onChange={(e) => updateField('name', e.target.value)}
      />
      <input
        type="email"
        value={form.email}
        onChange={(e) => updateField('email', e.target.value)}
      />
    </form>
  );
}
