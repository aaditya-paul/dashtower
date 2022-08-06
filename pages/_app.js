import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';

import '../styles/globals.css';

import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const location = router.pathname;

  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <div className='font-inter antialiased bg-gray-900 text-gray-200 tracking-tight'>
      <Head>
        <title>DashTower</title>
        <meta name='title' content='DashTower' />
        <meta
          name='description'
          content='Your internet presence needs better care. DashTower supercharges your business with custom branding plans. '
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://metatags.io/' />
        <meta property='og:title' content='DashTower' />
        <meta
          property='og:description'
          content='Your internet presence needs better care. DashTower supercharges your business with custom branding plans. '
        />
        <meta
          property='og:image'
          content='https://i.ibb.co/VvfBMxL/og-dashtower.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://metatags.io/' />
        <meta property='twitter:title' content='DashTower' />
        <meta
          property='twitter:description'
          content='Your internet presence needs better care. DashTower supercharges your business with custom branding plans. '
        />
        <meta
          property='twitter:image'
          content='https://i.ibb.co/VvfBMxL/og-dashtower.png'
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
