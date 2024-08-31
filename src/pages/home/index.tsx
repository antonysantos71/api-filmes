import { Footer } from "../../components/footer";
import { MovieList } from "../../components/movie-list";
import { NavBar } from "../../components/navbar";

export function Home(){
  return(
    <>
      <NavBar/>
      <MovieList/>
      <Footer/> 
    </>
  )
}