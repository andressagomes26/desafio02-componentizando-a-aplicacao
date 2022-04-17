import { MovieCard } from './MovieCard';
import { useEffect, useState } from 'react';
import { api } from '../services/api';


interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ContentProps {
  onSelectedGenre: GenreResponseProps;
  onSelectedGenreId: number
}

export function Content({onSelectedGenre, onSelectedGenreId}: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${onSelectedGenreId}`).then(response => {
      setMovies(response.data);
    });

  }, [onSelectedGenreId])

  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {onSelectedGenre.title}</span></span>
      </header>
  
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}