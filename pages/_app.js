import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Existing global styles

import { useEffect } from 'react';

function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((Bootstrap) => {
    });
  }, []);

  return <Component {...pageProps} />;
}

export default App;