// 从第 30 章提取
// 文件名: chapter30_code482.ts
// JSON: { "auth": { "login": "登录", "register": "注册" } }

// 访问嵌套键
const t = await getTranslations('auth');
t('login');    // "登录"
t('register'); // "注册"
