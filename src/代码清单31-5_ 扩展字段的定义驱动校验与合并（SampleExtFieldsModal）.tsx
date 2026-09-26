  const [draft, setDraft] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 打开时用 initialExt 同步；extFields 列表变化时也重置，避免陈旧 key 残留。
  useEffect(() => {
    if (!open) return;
    const next: Record<string, string> = {};
    for (const f of extFields) next[f.key] = initialExt?.[f.key] ?? "";
    setDraft(next);
    setErrors({});
  }, [open, extFields, initialExt]);

// …

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    for (const f of extFields) {
      if (!f.required) continue;
      const v = (draft[f.key] ?? "").trim();
      if (!v) next[f.key] = "必填";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!validate()) return;
    const merged: Record<string, string> = { ...(initialExt ?? {}) };
    for (const f of extFields) {
      const v = (draft[f.key] ?? "").trim();
      if (v) merged[f.key] = v;
    }
    await onSubmit(merged);
  };

// …

function renderControl(
  f: ExtFieldDef,
  inputId: string,
  value: string,
  setValue: (v: string) => void,
): ReactElement {
  const t = f.type ?? "text";
  if (t === "select") {
    return (
      <select
        id={inputId}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">请选择</option>
        {(f.options ?? []).map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }
  // …（number / date / text 分支同理，略）
}