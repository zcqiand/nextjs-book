// 字符串形式
<Link href="/about">关于</Link>

// 对象形式（适合追加查询参数）
<Link href={{ pathname: '/tasks', query: { status: 'todo' } }}>待办任务</Link>