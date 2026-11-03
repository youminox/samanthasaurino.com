import blogPostsData from "./blog-posts.json";
import type { BlogPost } from "./blog-posts";

const ALL_POSTS: BlogPost[] = blogPostsData as BlogPost[];
const POSTS_BY_SLUG = new Map<string, BlogPost>(
  ALL_POSTS.map((p) => [p.slug, p])
);

export function getAllPosts(): BlogPost[] {
  return ALL_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS_BY_SLUG.get(slug);
}
