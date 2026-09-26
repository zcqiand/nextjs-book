// Link 上使用：scroll={false} 表示导航后不回顶，保持当前位置
<Link href="/tasks/3" scroll={false}>查看任务</Link>

// useRouter 中使用
router.push('/tasks/3', { scroll: false });