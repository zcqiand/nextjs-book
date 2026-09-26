// 为什么需要这个文件：按 Next.js 官方文档的口径，软导航期间某个槽可能与当前 URL
// 无法匹配（unmatched slot），且该槽此前的状态无法恢复；此时如果没有 default.js，
// 整个页面会渲染 404。default.js 的作用就是在槽无法匹配时给它一个兜底内容。
// 面板没有可展示的内容时，返回 null 即可。
export default function ActivityDefault() {
  return null;
}