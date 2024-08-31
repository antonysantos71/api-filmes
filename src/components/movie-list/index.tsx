import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

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
  
  return (
    <div className="p-4 hover:cursor-pointer">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-zinc-800 shadow-lg rounded-lg overflow-hidden"
            onClick={() => redirectDetailsMovie(movie.id)}
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
                <span className="text-yellow-500 font-semibold text-xl">
                  {movie.vote_average}
                </span>
                <div className="bg-gray-200 rounded-full p-1 px-2 text-xs font-semibold text-gray-700">
                  <span className="inline-block bg-yellow-400 h-2 w-2 rounded-full"></span>
                  <span className="ml-1">Rating</span>
                </div>
              </div>
              <div className="w-full bg-blue-900 rounded-md flex justify-center mt-5 h-10">
                <button>Ver mais</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
