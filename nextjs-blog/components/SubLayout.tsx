import Link from 'next/link';

export default function SubLayout({ children }) {
  return (
    <div>
      <h3>
        <Link href="/">홈으로</Link>
      </h3>
      {children}
    </div>
  );
}
