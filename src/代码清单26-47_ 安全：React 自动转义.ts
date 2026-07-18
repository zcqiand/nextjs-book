// 安全：React 自动转义
return <div>{userContent}</div>;

// 危险：需要确保内容已消毒
return <div dangerouslySetInnerHTML={{ __html: userContent }} />;

// 安全：使用 DOMPurify 消毒
import DOMPurify from 'dompurify';

return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userContent) }} />;