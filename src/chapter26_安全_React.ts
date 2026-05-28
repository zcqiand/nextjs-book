// 从第 26 章提取
// 代码清单: 安全：React 自动转义
// 文件名: chapter26_安全_React.ts
// 安全：React 自动转义
return <div>{userContent}</div>;

// 危险：需要确保内容已消毒
return <div dangerouslySetInnerHTML={{ __html: userContent }} />;

// 安全：使用 DOMPurify 消毒
import DOMPurify from 'dompurify';

return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userContent) }} />;
