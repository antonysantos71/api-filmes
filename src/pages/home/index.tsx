import { Footer } from "../../components/footer";
import { MovieList } from "../../components/movie-list";
import { NavBar } from "../../components/navbar";

export function Home(){
  return(
    <div>
      <NavBar/>
      <MovieList/>
      <Footer/> 
    </div>
  )
}