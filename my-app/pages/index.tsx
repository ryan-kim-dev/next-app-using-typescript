// import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Seo from '../components/Seo';
import axios from 'axios';
import { MovieProps } from '../types/movies';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();

  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie: MovieProps) => {
        return (
          <div
            className="movie"
            key={movie.id}
            onClick={() => onClick(movie.id, movie.original_title)}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              width={500}
              height={500}
              alt="poster"
            />
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <h4>{movie.original_title}</h4>
            </Link>
          </div>
        );
      })}
      <style jsx>{`
        .container {
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
          align-items: center;
        }

        .movie {
          cursor: pointer;
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }

        .movie:hover {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({}: GetServerSideProps) {
  // const { results } = await (
  //   await axios.get(`http://localhost:3000/api/movies`)
  // ).data;
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    /** return?????? props??? ssr??? ???????????? props??? ?????????????????? page ??????????????? pageProps??? ?????? */
    props: { results },
  };
}
