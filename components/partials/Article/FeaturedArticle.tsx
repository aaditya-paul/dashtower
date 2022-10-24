import React from "react";
import Image from "next/image";
import Link from "next/link";

import Tags from "components/utils/Tags";

import { Post } from "interfaces/Post";
import { humanDate } from "utils/common";

const FeaturedArticle = ({ post }: { post: Post }) => {
  return (
    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
      <Link href={`/blog/${post.slug}`}>
        <div
          className="relative block group"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div
            className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
            aria-hidden="true"
          ></div>
          <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <>
              <Image
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                src={post.feature_image ?? "/assets/blog-post-01.jpg"}
                width="540"
                height="303"
                alt={post.title}
              />
            </>
          </figure>
        </div>
      </Link>
      <div data-aos="fade-left" data-aos-delay="200">
        <header>
          <div className="mb-3">
            <Tags tags={post.tags} />
          </div>
          <h3 className="h3 text-2xl lg:text-3xl mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
        </header>
        <p className="text-lg text-gray-400 grow">
          {post.custom_excerpt ?? post.excerpt}
        </p>
        <footer className="flex items-center mt-4">
          <>
            <Image
              className="rounded-full shrink-0 mr-4"
              src={
                post.authors[0].profile_image ?? "/assets/news-author-04.jpg"
              }
              width="40"
              height="40"
              alt={post.authors[0].name}
            />
          </>
          <div>
            <div className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
              {post.authors[0].name}
            </div>
            <span className="text-gray-700"> - </span>
            <span className="text-gray-500">{humanDate(post.updated_at)}</span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default FeaturedArticle;
