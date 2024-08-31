import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/navbar";
import { Calendar, Star } from "lucide-react";
import { Footer } from "../../components/footer";

interface IMoviesListProps {
  id: number;
  title: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export function DetailsFilm() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMoviesListProps | undefined>(undefined);

  useEffect(() => {
    const fetchFilmId = async (id: number) => {
      try {
        const response = await api.get(`movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    if (id) {
      fetchFilmId(parseInt(id));
    }
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="max-w-4xl p-6 bg-zinc-800 shadow-md rounded-lg my-5 mx-5">
      {movie ? (
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="mt-6 md:mt-0 md:ml-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {movie.title}
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {movie.overview}
            </p>
            <div className="flex items-center mt-2 text-gray-700 dark:text-gray-300">
              <Star className="h-5 w-5 mr-2 text-yellow-500" />
              <span>Avaliação: {movie.vote_average.toFixed(1)}</span>
            </div>
            <div className="flex items-center mt-2 text-gray-700 dark:text-gray-300">
              <Calendar className="h-5 w-5 mr-2 text-gray-500" />
              <span>Data de Lançamento: {movie.release_date}</span>
            </div>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
    <Footer/>
    </>
  );
}
