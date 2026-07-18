type Route = '/' | '/about' | '/blog' | '/blog/[slug]' | '/users/[id]';

type ApiRoute = `/api${Route}`;
// "/api/" | "/api/about" | "/api/blog" | "/api/blog/[slug]" | "/api/users/[id]"

// 生成事件名称类型
type EventPrefix = 'click' | 'focus' | 'blur';
type EventSuffix = 'start' | 'end';
type EventName = `${EventPrefix}:${EventSuffix}`;
// "click:start" | "click:end" | "focus:start" | "focus:end" | "blur:start" | "blur:end"