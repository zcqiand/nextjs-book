// 使用 aria-live 通知屏幕阅读器
function NotificationContainer() {
  const [notification, setNotification] = useState<string | null>(null);

  return (
    <div aria-live="polite" aria-atomic="true">
      {notification && (
        <div role="status" className="notification">
          {notification}
        </div>
      )}
    </div>
  );
}

// 重要通知使用 assertive
function ErrorAlert({ message }: { message: string }) {
  return (
    <div role="alert" aria-live="assertive">
      错误：{message}
    </div>
  );
}