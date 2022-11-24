import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {};

export default function Navbar({}: Props) {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <span className={router.pathname === '/' ? 'active' : ''}>홈</span>
      </Link>
      <Link href="/about">
        <span className={router.pathname === '/about' ? 'active' : ''}>
          About
        </span>
      </Link>
      <style jsx>{`
        nav {
          border: 1px solid green;
          color: red;
          display: flex;
          justify-content: space-evenly;
        }
        .active {
          color: red;
          border: 3px solid red;
        }
      `}</style>
    </nav>
  );
}
