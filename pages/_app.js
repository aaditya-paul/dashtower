import { useEffect } from 'react';
import Aos from 'aos';

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
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
