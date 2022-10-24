import React from "react";

import { Posts } from "interfaces/Post";
import ArticleCard from "./Article/ArticleCard";

function News({ posts }: { posts: Posts }) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">
              Stay in the loop with branding and marketing articles
            </h2>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
              {posts.posts.map((post) => (
                <ArticleCard key={post.uuid} article={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
