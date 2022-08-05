import Link from 'next/link';

const BlogSingle = () => {
  return (
    <section className='relative'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          <div className='max-w-3xl mx-auto'>
            <article>
              <header className='mb-8'>
                {/* Title and excerpt */}
                <div className='text-center md:text-left'>
                  <h1 className='h1 mb-4' data-aos='fade-up'>
                    Designing a functional workflow at home.
                  </h1>
                  <p
                    className='text-xl text-gray-400'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
                {/* Article meta */}
                <div className='md:flex md:items-center md:justify-between mt-3'>
                  {/* Author meta */}
                  <div
                    className='flex items-center justify-center'
                    data-aos='fade-up'
                    data-aos-delay='400'
                  >
                    <Link href='#'>
                      <img
                        className='rounded-full shrink-0 mr-4'
                        src={'/assets/news-author-04.jpg'}
                        width='40'
                        height='40'
                        alt='Author 04'
                      />
                    </Link>
                    <div className='font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out'>
                      <Link href='#'>Chris Solerieu</Link>
                      <span className='text-gray-700'> - </span>
                      <span className='text-gray-500'>Jan 19, 2020</span>
                    </div>
                  </div>
                  {/* Article tags */}
                  <div
                    className='flex justify-center mt-4 md:mt-0'
                    data-aos='fade-up'
                    data-aos-delay='600'
                  >
                    <ul className='flex flex-wrap text-xs font-medium -m-1'>
                      <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out'>
                        <Link href='#'>Product</Link>
                      </li>
                      <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out'>
                        <Link href='#'>Engineering</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>

              {/* Article image */}
              <figure
                className='mb-8 lg:-ml-32 lg:-mr-32'
                data-aos='fade-up'
                data-aos-delay='600'
              >
                <img
                  className='w-full'
                  src={'/assets/news-single.jpg'}
                  width='1024'
                  height='576'
                  alt='News single'
                />
              </figure>

              {/* Article content */}

              {/* Article footer */}
              <footer>
                <div className='md:flex md:items-center md:justify-between text-center md:text-left'>
                  <div className='text-lg text-gray-400 italic'>
                    Originally published at{' '}
                    <Link href='https://cruip.com/'>
                      <a className='text-gray-200'>https://cruip.com/</a>
                    </Link>
                    .
                  </div>
                  <ul className='inline-flex mt-4 md:ml-4 md:mb-0'>
                    <li className='flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out'>
                      <Link href='#'>
                        <svg
                          className='w-8 h-8 fill-current'
                          viewBox='0 0 32 32'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z' />
                        </svg>
                      </Link>
                    </li>
                    <li className='ml-4 flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out'>
                      <Link href='#'>
                        <svg
                          className='w-8 h-8 fill-current'
                          viewBox='0 0 32 32'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z' />
                        </svg>
                      </Link>
                    </li>
                    <li className='ml-4 flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out'>
                      <Link href='#' className=''>
                        <svg
                          className='w-8 h-8 fill-current'
                          viewBox='0 0 32 32'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z' />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </footer>
            </article>
          </div>

          {/* Related articles */}
          <aside className='mt-20'>
            <div className='max-w-sm mx-auto md:max-w-none'>
              {/* Section title */}
              <h4 className='h4 py-6 mb-10 border-t border-b border-gray-700'>
                More from Open PRO
              </h4>

              {/* Articles container */}
              <div className='grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start'>
                {/* 1st article */}
                <article className='flex flex-col h-full' data-aos='fade-up'>
                  <header>
                    <div className='block mb-6'>
                      <Link href='/blog-post'>
                        <figure className='relative h-0 pb-9/16 overflow-hidden rounded-sm'>
                          <img
                            className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                            src={'/assets/news-04.jpg'}
                            width='352'
                            height='198'
                            alt='News 04'
                          />
                        </figure>
                      </Link>
                    </div>
                    <div className='mb-3'>
                      <ul className='flex flex-wrap text-xs font-medium -m-1'>
                        <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out'>
                          <Link href='#'>Product</Link>
                        </li>
                        <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out'>
                          <Link href='#'>Culture</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className='h4 mb-2  hover:text-gray-100 transition duration-150 ease-in-out'>
                      <Link href='/blog-post'>
                        The quick brown fox jumped over the lazy dog.
                      </Link>
                    </h3>
                  </header>
                  <p className='text-lg text-gray-400 grow'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <footer className='flex items-center mt-4'>
                    <Link href='#'>
                      <img
                        className='rounded-full shrink-0 mr-4'
                        src={'/assets/news-author-05.jpg'}
                        width='40'
                        height='40'
                        alt='Author 05'
                      />
                    </Link>
                    <div className='font-medium'>
                      <div className='text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out'>
                        <Link href='#'>Alexandra Smith</Link>
                      </div>
                      <span className='text-gray-700'> - </span>
                      <span className='text-gray-500'>Jan 7, 2020</span>
                    </div>
                  </footer>
                </article>

                {/* 2nd article */}
                <article
                  className='flex flex-col h-full'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <header>
                    <div className='block mb-6'>
                      <Link href='/blog-post'>
                        <figure className='relative h-0 pb-9/16 overflow-hidden rounded-sm'>
                          <img
                            className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                            src={'/assets/news-05.jpg'}
                            width='352'
                            height='198'
                            alt='News 05'
                          />
                        </figure>
                      </Link>
                    </div>
                    <div className='mb-3'>
                      <ul className='flex flex-wrap text-xs font-medium -m-1'>
                        <li className='m-1'>
                          <Link
                            href='#'
                            className='inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out'
                          >
                            Engineering
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className='h4 mb-2'>
                      <Link
                        href='/blog-post'
                        className='hover:text-gray-100 transition duration-150 ease-in-out'
                      >
                        The quick brown fox jumped over the lazy dog.
                      </Link>
                    </h3>
                  </header>
                  <p className='text-lg text-gray-400 grow'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <footer className='flex items-center mt-4'>
                    <Link href='#'>
                      <img
                        className='rounded-full shrink-0 mr-4'
                        src={'/assets/news-author-03.jpg'}
                        width='40'
                        height='40'
                        alt='Author 03'
                      />
                    </Link>
                    <div className='font-medium'>
                      <div className='text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out'>
                        <Link href='#'>Lisa Crockett</Link>
                      </div>
                      <span className='text-gray-700'> - </span>
                      <span className='text-gray-500'>Jan 4, 2020</span>
                    </div>
                  </footer>
                </article>

                {/* 3rd article */}
                <article
                  className='flex flex-col h-full'
                  data-aos='fade-up'
                  data-aos-delay='400'
                >
                  <header>
                    <div className='block mb-6'>
                      <Link href='/blog-post'>
                        <figure className='relative h-0 pb-9/16 overflow-hidden rounded-sm'>
                          <img
                            className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                            src={'/assets/news-06.jpg'}
                            width='352'
                            height='198'
                            alt='News 06'
                          />
                        </figure>
                      </Link>
                    </div>
                    <div className='mb-3'>
                      <ul className='flex flex-wrap text-xs font-medium -m-1'>
                        <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-150 ease-in-out'>
                          <Link href='#'>Desing</Link>
                        </li>
                        <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-teal-500 hover:bg-teal-600 transition duration-150 ease-in-out'>
                          <Link href='#'>Tutorials and articles</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className='h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out'>
                      <Link href='/blog-post'>
                        The quick brown fox jumped over the lazy dog.
                      </Link>
                    </h3>
                  </header>
                  <p className='text-lg text-gray-400 grow'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <footer className='flex items-center mt-4'>
                    <Link href='#'>
                      <img
                        className='rounded-full shrink-0 mr-4'
                        src={'/assets/news-author-06.jpg'}
                        width='40'
                        height='40'
                        alt='Author 06'
                      />
                    </Link>
                    <div className='font-medium'>
                      <div className='text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out'>
                        <Link href='#'>Anton Sebastian</Link>
                      </div>
                      <span className='text-gray-700'> - </span>
                      <span className='text-gray-500'>Jan 2, 2020</span>
                    </div>
                  </footer>
                </article>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
