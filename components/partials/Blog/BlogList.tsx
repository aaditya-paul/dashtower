import React from "react";

import Pagination from "components/utils/Pagination";

import ArticleCard from "../Article/ArticleCard";

import { FeaturedPosts, Post } from "interfaces/Post";
import FeaturedArticle from "../Article/FeaturedArticle";

interface BlogListProps {
  posts: Post[];
  featured?: FeaturedPosts;
}

function BlogList({ featured, posts }: BlogListProps): JSX.Element {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/*  Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1" data-aos="fade-up">
              Stay Updated with our latest blog posts
            </h1>
          </div>

          {/*  Featured article */}
          <div className="pb-12 md:pb-20">
            {featured?.posts && <FeaturedArticle post={featured.posts[0]} />}
          </div>

          {/*  Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            {/*  Section title */}
            <h4
              className="h4 pb-6 mb-10 border-b border-gray-700"
              data-aos="fade-up"
            >
              Latest articles
            </h4>

            {/*  Articles container */}
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
              {
                // Loop through the posts and render the ArticleCard component
                posts.map((post) => (
                  <ArticleCard key={post.uuid} article={post} />
                ))
              }
            </div>
          </div>

          {/*  Pagination */}
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default BlogList;
