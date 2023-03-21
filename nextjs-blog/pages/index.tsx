import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  console.log(
    '서버에서 미리 렌더링되기 때문에 크롬 개발자 도구에서 이 콘솔로그는 안보임'
  );

  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
      <ul>
        <li>
          <Link href="/csr">CSR 로</Link>
        </li>
        <li>
          <Link href="/ssg">SSG 로</Link>
        </li>
        <li>
          <Link href="/isr">ISR 로</Link>
        </li>
      </ul>
    </>
  );
}
