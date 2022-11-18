import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      This is _app
      <Component {...pageProps} />
    </>
  );
}
