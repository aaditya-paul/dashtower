import Link from 'next/link';
import Image from 'next/image';

import { trimmer, humanDate } from 'utils/common';

const ArticleCard = ({ article }) => {
  const excerpt = article.custom_excerpt
    ? article.custom_excerpt
    : article.excerpt;
  return (
    <article className='flex flex-col h-full' data-aos='fade-up'>
      <header>
        <Link href={`/blog/${article.slug}`}>
          <div className='block mb-6'>
            <figure className='relative h-0 pb-9/16 overflow-hidden rounded-sm'>
              <Image
                className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                src={article.feature_image}
                width='352'
                height='198'
                alt={article.title}
              />
            </figure>
          </div>
        </Link>
        <div className='mb-3'>
          <ul className='flex flex-wrap text-xs font-medium -m-1'>
            <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out'>
              <Link href='#'>Product</Link>
            </li>
            <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out'>
              <Link href='#'>Engineering</Link>
            </li>
          </ul>
        </div>
        <h3 className='h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out'>
          <Link href={`/blog/${article.slug}`}>
            <a>{article.title}</a>
          </Link>
        </h3>
      </header>
      <p className='text-lg text-gray-400 grow'>{trimmer(excerpt, 150)}</p>
      <footer className='flex items-center mt-4'>
        <Link href='#'>
          <Image
            className='rounded-full shrink-0 mr-4'
            src={
              article.authors[0].profile_image
                ? article.authors[0].profile_image
                : '/assets/news-author-04.jpg'
            }
            width='40'
            height='40'
            alt={article.authors && article.authors[0].name}
          />
        </Link>
        <div className='font-medium'>
          <div className='text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out'>
            <Link href='#'>
              <a>{article.authors && article.authors[0].name}</a>
            </Link>
          </div>
          <span className='text-gray-700'> - </span>
          <span className='text-gray-500'>{humanDate(article.created_at)}</span>
        </div>
      </footer>
    </article>
  );
};

export default ArticleCard;
