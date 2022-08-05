import React from 'react';

import Header from '../../../components/partials/Header';
import PageIllustration from '../../../components/partials/PageIllustration';
import BlogSingle from '../../../components/partials/BlogSingle';
import Newsletter from '../../../components/partials/Newsletter';
import Footer from '../../../components/partials/Footer';

function BlogPost() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className='grow'>
        {/*  Page illustration */}
        <div
          className='relative max-w-6xl mx-auto h-0 pointer-events-none'
          aria-hidden='true'
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <BlogSingle />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default BlogPost;
