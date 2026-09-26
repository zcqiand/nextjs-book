// 槽位加载态：@team 的数据未就绪时，该槽先渲染这里的占位
export default function TeamLoading() {
  return <p style={{ color: '#6b7280', fontSize: 14 }}>成员面板加载中……</p>;
}