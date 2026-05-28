// 从第 20 章提取
// 代码清单: getPosts 函数
// 文件名: chapter20_getPosts_2.tsx
import { request, gql } from 'graphql-request';

const endpoint = 'https://api.example.com/graphql';

const GET_POSTS = gql`
  query GetPosts($limit: Int!) {
    posts(take: $limit) {
      id
      title
      excerpt
      author {
        name
        avatar
      }
      tags
      createdAt
    }
  }
`;

const GET_POST = gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      content
      author {
        name
        bio
      }
      comments {
        id
        content
        createdAt
      }
    }
  }
`;

export async function getPosts(limit: number = 10) {
  return request<{ posts: Post[] }>(endpoint, GET_POSTS, { limit });
}

export async function getPost(slug: string) {
  return request<{ post: Post }>(endpoint, GET_POST, { slug });
}
