// 从第 29 章提取
// 代码清单: 分离容器和展示
// 文件名: chapter29_Card.ts
// 分离容器和展示
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNode;
}

interface CardContentProps {
  children: React.ReactNode;
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg border bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ children }: CardHeaderProps) {
  return <div className="border-b px-6 py-4">{children}</div>;
}

function CardContent({ children }: CardContentProps) {
  return <div className="px-6 py-4">{children}</div>;
}

// 使用
function PostCard() {
  return (
    <Card>
      <CardHeader>
        <h3>文章标题</h3>
      </CardHeader>
      <CardContent>
        <p>文章摘要...</p>
      </CardContent>
    </Card>
  );
}
