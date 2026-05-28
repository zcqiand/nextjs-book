// 从第 41 章提取
// 代码清单: 通过 Vercel 配置实现灰度发布
// 文件名: chapter41_通过_Vercel.ts
# 通过 Vercel 配置实现灰度发布
# vercel.json
{
  "canary": {
    "percentage": 10,
    "flag": "new-feature"
  }
}
