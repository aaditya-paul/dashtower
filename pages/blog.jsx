import Header from 'components/partials/Header';
import PageIllustration from 'components/partials/PageIllustration';
import BlogList from 'components/partials/BlogList';
import Newsletter from 'components/partials/Newsletter';
import Footer from 'components/partials/Footer';

function Blog() {
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
        <BlogList />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Blog;
