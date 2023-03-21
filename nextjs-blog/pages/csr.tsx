import { useState, useEffect } from 'react';
import { Layout, SubLayout } from '../components';

export default function CSR() {
  const [time, setTime] = useState('');

  useEffect(() => {
    console.log('클라이언트에서 렌더링하므로 이 콘솔로그는 브라우저에서 보임');
    setTime(new Date().toISOString());
  }, []);

  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

CSR.getLayout = function getLayout(page: Element) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
