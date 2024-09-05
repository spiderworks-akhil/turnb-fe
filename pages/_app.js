import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/globals.css'; // Existing global 

import '../styles/owl.carousel.min.css';
import '../styles/owl.theme.default.min.css';
import '../styles/boxicons.min.css';
import '../styles/style.css';
import '../styles/baguetteBox.min.css';
import Head from 'next/head';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((Bootstrap) => {
    });
  }, []);

  return(
  <>
  <Head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</Head>
   <Component {...pageProps} />
   </>
   );
}

export default App;