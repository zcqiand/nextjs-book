// 为复杂交互提供键盘快捷键
export function TextEditor() {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Ctrl/Cmd + S 保存
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveDocument();
      }

      // Escape 关闭
      if (e.key === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return <div>编辑器内容</div>;
}