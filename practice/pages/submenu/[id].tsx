import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function About() {
  const router = useRouter();
  const id: number = Number(router.query.id);
  return (
    <>
      <h1>/pages/submenu/[id].tsx</h1>
      <p>Parameter id: {id}</p>
      <Link href="/">/pages/index.tsx</Link>
    </>
  );
}

export default About;
