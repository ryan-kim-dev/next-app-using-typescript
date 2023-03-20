export async function getStaticProps() {
  console.log('revalidate 주기마다 데이터가 변경된다');

  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  };
}

export default function ISR({ time }) {
  return (
    <div>
      <span>{time}</span>
    </div>
  );
}
