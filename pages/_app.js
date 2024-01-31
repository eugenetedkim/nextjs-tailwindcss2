import '@/styles/globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          duration: 100000,
          style: {
            background: 'black',
            color: 'white'
          }
        }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
