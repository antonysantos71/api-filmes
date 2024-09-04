import { useEffect, useState, type ChangeEvent } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Search, Star } from "lucide-react";

interface IMoviesListProps {
  id: number;
  title: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export function MovieList() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<IMoviesListProps[]>([]);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("discover/movie");
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const redirectDetailsMovie = (movieId: number) => {
    navigate(`movie/${movieId}`);
  };

  const handleSearchMovies = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (search === "") {
      setMovies(movies);
    } else {
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setMovies(filteredMovies);
    }
  };

  return (
    <div className="p-4 hover:cursor-pointer">
      <div className="flex items-center justify-center mb-5">
        <div className="w-1/3 bg-zinc-800 flex gap-3 p-2 items-center rounded-xl">
          <Search className="size-5" />
          <input
            type="text"
            placeholder="Search....."
            className="w-full bg-transparent outline-0 border-b-2 border-blue-400"
            onChange={handleSearchMovies}
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-zinc-800 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[450px] object-cover"
            />
            <div className="p-4">
              <span className="block text-lg font-semibold mb-2">
                {movie.title}
              </span>
              <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                {movie.overview}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-semibold text-md flex gap-1 items-center">
                  <Star className="size-5" />
                  {movie.vote_average.toFixed(1)}
                </span>
                <div className="bg-gray-200 rounded-full p-1 px-2 text-xs font-semibold text-gray-700">
                  <span className="inline-block bg-yellow-400 h-2 w-2 rounded-full"></span>
                  <span className="ml-1">Avaliação</span>
                </div>
              </div>
              <div className="w-full bg-blue-900 rounded-md flex justify-center mt-5 h-10">
                <button onClick={() => redirectDetailsMovie(movie.id)}>
                  Ver mais
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
