// 从第 34 章提取
// 代码清单: src/lib/logrocket.ts
// 文件名: chapter34_logrocket.ts
// src/lib/logrocket.ts
import LogRocket from 'logrocket';
import initLogRocketReact from 'logrocket-react';

if (typeof window !== 'undefined') {
  LogRocket.init('your-app-id');
  initLogRocketReact(LogRocket);
}
