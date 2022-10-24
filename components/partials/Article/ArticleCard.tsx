import React from "react";

import Link from "next/link";
import Image from "next/image";

import { trimmer, humanDate } from "utils/common";

import { Post } from "interfaces/Post";
import Tags from "components/utils/Tags";

const ArticleCard = ({ article }: { article: Post }): JSX.Element => {
  const excerpt =
    article.custom_excerpt != null ? article.custom_excerpt : article.excerpt;

  const featuredImage =
    article.feature_image != null
      ? article.feature_image
      : "/assets/blog-post-01.png";

  return (
    <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        <Link href={`/blog/${article.slug}`}>
          <div className="block mb-6">
            <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
              <Image
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                src={featuredImage}
                width="352"
                height="198"
                alt={article.title}
              />
            </figure>
          </div>
        </Link>
        <div className="mb-3">
          <Tags tags={article.tags} />
        </div>
        <h3 className="h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
          <Link href={`/blog/${article.slug}`}>
            <a>{article.title}</a>
          </Link>
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow">{trimmer(excerpt, 150)}</p>
      <footer className="flex items-center mt-4">
        <Image
          className="rounded-full shrink-0 mr-4"
          src={article.authors[0].profile_image ?? "/assets/news-author-02.jpg"}
          width="40"
          height="40"
          alt={article.authors[0].name}
        />
        <div className="font-medium">
          <div className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">
            <a>{article.authors[0].name}</a>
          </div>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500">{humanDate(article.created_at)}</span>
        </div>
      </footer>
    </article>
  );
};

export default ArticleCard;
