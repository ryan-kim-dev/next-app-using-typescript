import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>퀴즈로 복습하자</h1>
        <Link href="/quiz">
          <button>퀴즈 시작</button>
        </Link>
      </div>
    </main>
  );
}
