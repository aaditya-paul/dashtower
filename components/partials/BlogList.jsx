import Link from 'next/link';
import Image from 'next/image';

function BlogList() {
  return (
    <section className='relative'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          {/*  Page header */}
          <div className='max-w-3xl pb-12 md:pb-20 text-center md:text-left'>
            <h1 className='h1' data-aos='fade-up'>
              Refreshing news for developers and designers
            </h1>
          </div>

          {/*  Featured article */}
          <div className='pb-12 md:pb-20'>
            <article className='max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center'>
              <Link href='blog-post'>
                <div
                  className='relative block group'
                  data-aos='fade-right'
                  data-aos-delay='200'
                >
                  <div
                    className='absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none'
                    aria-hidden='true'
                  ></div>
                  <figure className='relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out'>
                    <Image
                      className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                      src={'assets/blog-post-01.jpg'}
                      width='540'
                      height='303'
                      alt='Blog post 01'
                    />
                  </figure>
                </div>
              </Link>
              <div data-aos='fade-left' data-aos-delay='200'>
                <header>
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
                  <h3 className='h3 text-2xl lg:text-3xl mb-2 hover:text-gray-100 transition duration-150 ease-in-out'>
                    <Link href='/blog-post'>
                      Designing a functional workflow at home.
                    </Link>
                  </h3>
                </header>
                <p className='text-lg text-gray-400 grow'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
                <footer className='flex items-center mt-4'>
                  <Link href='#'>
                    <Image
                      className='rounded-full shrink-0 mr-4'
                      src={'assets/news-author-04.jpg'}
                      width='40'
                      height='40'
                      alt='Author 04'
                    />
                  </Link>
                  <div>
                    <div className='font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out'>
                      <Link href='#'>Chris Solerieu</Link>
                    </div>
                    <span className='text-gray-700'> - </span>
                    <span className='text-gray-500'>Jan 19, 2020</span>
                  </div>
                </footer>
              </div>
            </article>
          </div>

          {/*  Articles list */}
          <div className='max-w-sm mx-auto md:max-w-none'>
            {/*  Section title */}
            <h4
              className='h4 pb-6 mb-10 border-b border-gray-700'
              data-aos='fade-up'
            >
              Latest articles
            </h4>

            {/*  Articles container */}
            <div className='grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start'>
              {/*  1st article */}
              <article className='flex flex-col h-full' data-aos='fade-up'>
                <header>
                  <Link href='/blog-post'>
                    <div className='block mb-6'>
                      <figure className='relative h-0 pb-9/16 overflow-hidden rounded-sm'>
                        <Image
                          className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                          src={'assets/NewsImage01'}
                          width='352'
                          height='198'
                          alt='News 01'
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
                    <Link href='/blog-post'>
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className='text-lg text-gray-400 grow'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className='flex items-center mt-4'>
                  <Link href='#'>
                    <Image
                      className='rounded-full shrink-0 mr-4'
                      src={'assets/news-author-01.jpg'}
                      width='40'
                      height='40'
                      alt='Author 01'
                    />
                  </Link>
                  <div className='font-medium'>
                    <div className='text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out'>
                      <Link href='#'>Anastasia Dan</Link>
                    </div>
                    <span className='text-gray-700'> - </span>
                    <span className='text-gray-500'>Jan 17, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  2nd article */}
              <article
                className='flex flex-col h-full'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <header>
                  <Link href='/blog-post'>
                    <div className='block mb-6'>
                      <figure className='relative h-0 pb-9/16 overflow-hidden rounded-sm'>
                        <Image
                          className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                          src={'assets/news-02.jpg'}
                          width='352'
                          height='198'
                          alt='News 02'
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className='mb-3'>
                    <ul className='flex flex-wrap text-xs font-medium -m-1'>
                      <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-150 ease-in-out'>
                        <Link href='#'>Desing</Link>
                      </li>
                      <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out'>
                        <Link href='#'>Engineering</Link>
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className='flex items-center mt-4'>
                  <Link href='#'>
                    <Image
                      className='rounded-full shrink-0 mr-4'
                      src={'assets/news-author-02.jpg'}
                      width='40'
                      height='40'
                      alt='Author 02'
                    />
                  </Link>
                  <div className='font-medium'>
                    <div className='text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out'>
                      <Link href='#'>Markus Barker</Link>
                    </div>
                    <span className='text-gray-700'> - </span>
                    <span className='text-gray-500'>Jan 12, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  3rd article */}
              <article
                className='flex flex-col h-full'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <header>
                  <Link href='/blog-post'>
                    <div className='block mb-6'>
                      <figure className='relative h-0 pb-9/16 overflow-hidden rounded-sm'>
                        <Image
                          className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                          src={'assets/news-03.jpg'}
                          width='352'
                          height='198'
                          alt='News 03'
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className='mb-3'>
                    <ul className='flex flex-wrap text-xs font-medium -m-1'>
                      <li className='m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out'>
                        <Link href='#'>Product</Link>
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className='flex items-center mt-4'>
                  <Link href='#'>
                    <Image
                      className='rounded-full shrink-0 mr-4'
                      src={'assets/news-author-03.jpg'}
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
                    <span className='text-gray-500'>Jan 9, 2020</span>
                  </div>
                </footer>
              </article>

              {/*  4th article */}
              <article className='flex flex-col h-full' data-aos='fade-up'>
                <header>
                  <Link href='/blog-post'>
                    <div className='block mb-6'>
                      <figure className='relative h-0 pb-9/16 overflow-hidden rounded-sm'>
                        <Image
                          className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                          src={'assets/news-04.jpg'}
                          width='352'
                          height='198'
                          alt='News 04'
                        />
                      </figure>
                    </div>
                  </Link>
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
                  <h3 className='h4 mb-2 hover:text-gray-100 transition duration-150 ease-in-out'>
                    <Link href='/blog-post'>
                      The quick brown fox jumped over the lazy dog.
                    </Link>
                  </h3>
                </header>
                <p className='text-lg text-gray-400 grow'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className='flex items-center mt-4'>
                  <Link href='#'>
                    <Image
                      className='rounded-full shrink-0 mr-4'
                      src={'assets/news-author-05.jpg'}
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

              {/*  5th article */}
              <article
                className='flex flex-col h-full'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <header>
                  <Link href='/blog-post'>
                    <div className='block mb-6'>
                      <figure className='relative h-0 pb-9/16 overflow-hidden rounded-sm'>
                        <Image
                          className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                          src={'assets/news-05.jpg'}
                          width='352'
                          height='198'
                          alt='News 05'
                        />
                      </figure>
                    </div>
                  </Link>
                  <div className='mb-3'>
                    <ul className='flex flex-wrap text-xs font-medium -m-1'>
                      <li className='m-1  inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out'>
                        <Link href='#'>Engineering</Link>
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className='flex items-center mt-4'>
                  <Link href='#'>
                    <Image
                      className='rounded-full shrink-0 mr-4'
                      src={'assets/news-author-03.jpg'}
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

              {/*  6th article */}
              <article
                className='flex flex-col h-full'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <header>
                  <Link href='/blog-post'>
                    <div className='block mb-6'>
                      <figure className='relative h-0 pb-9/16 overflow-hidden rounded-sm'>
                        <Image
                          className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'
                          src={'assets/news-06.jpg'}
                          width='352'
                          height='198'
                          alt='News 06'
                        />
                      </figure>
                    </div>
                  </Link>
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer className='flex items-center mt-4'>
                  <Link href='#'>
                    <Image
                      className='rounded-full shrink-0 mr-4'
                      src={'assets/news-author-06.jpg'}
                      width='40'
                      height='40'
                      alt='Author 06'
                    />
                  </Link>
                  <div className='font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out'>
                    <Link href='#'>Anton Sebastian</Link>
                    <span className='text-gray-700'> - </span>
                    <span className='text-gray-500'>Jan 2, 2020</span>
                  </div>
                </footer>
              </article>
            </div>
          </div>

          {/*  Pagination */}
          <nav
            className='flex justify-center pt-16'
            role='navigation'
            aria-label='Pagination Navigation'
          >
            <ul className='inline-flex flex-wrap font-medium text-sm -m-1'>
              <li className='m-1'>
                <span className='inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500'>
                  Prev
                </span>
              </li>
              <li className='m-1 inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out'>
                <Link href='#'>1</Link>
              </li>
              <li className='m-1 inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out'>
                <Link href='#'>2</Link>
              </li>
              <li className='m-1 inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out'>
                <Link href='#'>3</Link>
              </li>
              <li className='m-1'>
                <span className='inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500'>
                  ...
                </span>
              </li>
              <li className='m-1 inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out'>
                <Link href='#'>12</Link>
              </li>
              <li className='m-1 inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out'>
                <Link href='#'>Next</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
