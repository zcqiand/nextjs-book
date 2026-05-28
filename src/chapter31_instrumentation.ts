// 从第 31 章提取
// 代码清单: instrumentation.ts
// 文件名: chapter31_instrumentation.ts
// instrumentation.ts
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: process.env.DD_APP_ID,
  clientToken: process.env.DD_CLIENT_TOKEN,
  site: 'datadoghq.com',
  service: 'my-nextjs-app',
  env: process.env.NODE_ENV,
  version: process.env.APP_VERSION,
});
