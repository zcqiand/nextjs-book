// 从第 8 章提取
// 文件名: chapter08_BlogCard.tsx
// components/BlogCard.tsx
import Link from 'next/link';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span>{post.date}</span>
        <span className={styles.dot}>·</span>
        <span>{post.author}</span>
      </div>

      <h2 className={styles.title}>
        <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
          {post.title}
        </Link>
      </h2>

      <p className={styles.excerpt}>{post.excerpt}</p>

      <Link href={`/blog/${post.slug}`} className={styles.readMore}>
        阅读全文 →
      </Link>
    </article>
  );
}