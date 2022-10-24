export interface Posts {
  posts: Post[];
  meta: Meta;
}

export interface Post {
  created_at: Date;
  updated_at: Date;
  custom_excerpt: string | null;
  excerpt: string;
  feature_image: string | null;
  meta_description: string | null;
  slug: string;
  tags: string[];
  title: string;
  uuid: string;
  authors: Author[];
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  meta_title: string | null;
  meta_description: string | null;
  profile_image: string | null;
  cover_image: string | null;
  location: string | null;
  facebook: string | null;
  twitter: string | null;
  website: string | null;
}

export interface Meta {
  meta: {
    pagination: {
      page: number;
      limit: number;
      pages: number;
      total: number;
      next: number | null;
      prev: number | null;
    };
  };
}

export interface FeaturedPosts {
  posts: Post[] | undefined;
}

export interface Blogpost extends Post {
  reading_time: number;
  html: string;
  primary_author: Author;
  feature_image_caption: string | null;
}
