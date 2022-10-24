import React, { useEffect } from "react";
import Image from "next/image";

import { Blogpost } from "interfaces/Post";
import { humanDate } from "utils/common";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import ArticleFooter from "../Article/ArticleFooter";

import ArticleCard from "../Article/ArticleCard";

import { Post } from "interfaces/Post";

import Tags from "components/utils/Tags";

const BlogSingle = ({
  post,
  featured,
}: {
  post: Blogpost;
  featured: Post[];
}): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const POST_URL = `${BASE_URL}/blog/${post.slug}`;

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto">
              <article>
                <header className="mb-8">
                  {/* Title and excerpt */}
                  <div className="text-center md:text-left">
                    <h1 className="h1 mb-4" data-aos="fade-up">
                      {post.title}
                    </h1>
                    <p
                      className="text-xl text-gray-400"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {post.custom_excerpt ?? post.excerpt}
                    </p>
                  </div>
                  {/* Article meta */}
                  <div className="md:flex md:items-center md:justify-between mt-3">
                    {/* Author meta */}
                    <div
                      className="flex items-center justify-center"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <Image
                        className="rounded-full shrink-0 mr-4"
                        src={
                          post.primary_author.profile_image ??
                          "/assets/news-author-04.jpg"
                        }
                        width="40"
                        height="40"
                        alt={post.primary_author.name}
                      />

                      <div className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
                        {post.primary_author.name}
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">
                          {humanDate(post.updated_at)}
                        </span>
                      </div>
                    </div>
                    {/* Article tags */}
                    <div
                      className="flex justify-center mt-4 md:mt-0"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      {
                        // Loop through the tags and render the Tags component
                        <Tags tags={post.tags} />
                      }
                    </div>
                  </div>
                </header>

                {/* Article image */}
                <figure
                  className="mb-8 lg:-ml-32 lg:-mr-32"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Image
                    className="w-full"
                    src={post.feature_image ?? "/assets/news-single.jpg"}
                    width="1024"
                    height="576"
                    alt={post.title}
                  />
                </figure>

                {/* Article content */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.html,
                  }}
                ></div>

                {/* Article footer */}
                <ArticleFooter
                  shareLinks={{
                    title: post.title,
                    slug: post.slug,
                    postUrl: POST_URL,
                  }}
                />
              </article>
            </div>

            {/* Related articles */}
            <aside className="mt-20">
              <div className="max-w-sm mx-auto md:max-w-none">
                {/* Section title */}
                <h4 className="h4 py-6 mb-10 border-t border-b border-gray-700">
                  More Articles Like This
                </h4>

                {/* Articles container */}
                <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                  {featured &&
                    featured.map((article) => (
                      <ArticleCard key={article.uuid} article={article} />
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
