import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
