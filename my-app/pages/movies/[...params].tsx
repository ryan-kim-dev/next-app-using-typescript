import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
// import { useRouter } from 'next/router';

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const router = useRouter();
  // console.log(router);
  const [title, id] = params;
  return (
    <div>
      <h4>{title ? title : 'Loading...'}</h4>
      <div>{id}</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { params },
}) => {
  console.log(params);
  return {
    props: {
      params,
    },
  };
};
