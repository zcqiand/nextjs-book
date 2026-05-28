// 从第 34 章提取
// 代码清单: contentlayer.config.ts
// 文件名: chapter34_Post.ts
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  content: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
});
