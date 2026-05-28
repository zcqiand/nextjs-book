// 从第 31 章提取
// 代码清单: newrelic.js
// 文件名: chapter31_info.ts
// newrelic.js
'use strict';
module.exports = {
  info: function info() {
    return {
      app_name: ['my-nextjs-app'],
      license_key: process.env.NEW_RELIC_LICENSE_KEY,
      logging: { level: 'info' },
    };
  },
};
