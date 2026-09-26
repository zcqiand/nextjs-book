// Navigation.module.css 中的声明          → 对应 Tailwind 类名
// display: flex; gap: 1.5rem             → "flex gap-6"
// padding: 0.5rem 1rem; border-radius    → "px-4 py-2 rounded"
// :hover 换背景色和文字色                 → "hover:bg-gray-100 hover:text-blue-600"
// .active 蓝底白字                        → "bg-blue-600 text-white"

// active 高亮：模板字符串条件拼接（与清单6-24同构）
className={`${base} ${pathname === link.href ? 'bg-blue-600 text-white' : 'text-gray-600'}`}