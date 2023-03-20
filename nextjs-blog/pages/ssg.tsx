export async function getStaticProps() {
  console.log(
    'SSG는 SSR과 다르게 새로고침 해도 props 값은 빌드 시점에서 변하지 않는다'
  );

  return {
    props: { time: new Date().toISOString() },
  };
}

export default function SSG({ time }) {
  return (
    <div>
      <span>{time}</span>
    </div>
  );
}
