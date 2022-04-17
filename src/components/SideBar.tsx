import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  onClickButton: (id: number) => void;
  onSelectedGenreId: number;
  onGenres: GenreResponseProps[];
}

export function SideBar({onClickButton, onSelectedGenreId, onGenres}: SideBarProps) {
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {onGenres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={onSelectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}