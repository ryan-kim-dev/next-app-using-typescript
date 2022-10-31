import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>/pages/index.tsx</h1>
      <ul>
        <li>
          <a href="/submenu">/pages/submenu/index.tsx</a>
        </li>
        <li>
          <a href="/submenu/about">/pages/submenu/about.tsx</a>
        </li>
        <li>
          <a href="/submenu/1">/pages/submenu/[id].tsx</a>
        </li>
        <li>
          <a href="/submenu/2">/pages/submenu/[id].tsx</a>
        </li>
      </ul>
    </div>
  );
}
