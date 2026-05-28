// 从第 29 章提取
// 代码清单: PostCard 函数
// 文件名: chapter29_PostCard.ts
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

export function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">{post.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-sm text-gray-500">{formatDate(post.publishedAt)}</span>
        <Button variant="ghost" size="sm">
          阅读更多
        </Button>
      </CardFooter>
    </Card>
  );
}
