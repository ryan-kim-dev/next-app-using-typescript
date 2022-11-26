import { useState, useEffect } from 'react';
import Seo from '../components/Seo';
import axios from 'axios';

const API_KEY = 'c14e7f431d238127cb4acc682f92c9f8';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // async IIFE
    (async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const { results } = await res.data;
      return setMovies(results);
    })();
  }, []);

  type MovieProps = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };

  return (
    <div>
      <Seo title="Home" />
      {movies.map((movie: MovieProps) => {
        return <div key={movie.id}></div>;
      })}
    </div>
  );
}
