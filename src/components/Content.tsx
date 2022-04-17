import { MovieCard } from './MovieCard';

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
  onMovies: MovieProps[];
}

export function Content({onSelectedGenre, onMovies}: ContentProps) {
  // Complete aqui
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {onSelectedGenre.title}</span></span>
      </header>
  
      <main>
        <div className="movies-list">
          {onMovies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}