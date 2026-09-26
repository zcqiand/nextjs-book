// src/app/tasks/page.tsx
// 教学占位数据：真实项目里这份数据来自数据库或接口，
// 本章用数组字面量是为了让读者把注意力放在「渲染方式」上。
const tasks = [
  { id: 1, title: "整理第 9 章讲义", assignee: "林小满", status: "进行中" },
  { id: 2, title: "修复登录页样式", assignee: "陈舟", status: "待处理" },
  { id: 3, title: "编写组件库文档", assignee: "周之然", status: "已完成" },
];

// 注意这里没有任何渲染相关的配置——没有 export 声明、没有特殊参数。
// Next.js 的默认策略就是预渲染：构建时就把这个组件执行一遍，
// 生成完整 HTML 存下来，之后每个访客拿到的都是这份现成页面。
export default function TasksPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">任务列表</h1>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div>
              <p className="font-medium text-slate-800">{task.title}</p>
              <p className="text-sm text-slate-500">负责人：{task.assignee}</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}