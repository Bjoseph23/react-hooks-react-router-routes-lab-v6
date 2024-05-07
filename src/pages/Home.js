import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies]=useState([])
  
  useEffect(()=>{
    fetch("http://localhost:3000/movies")
    .then(r=> r.json())
    .then(data => setMovies(data))
    .catch(error => console.log(error))
  },[])
  const movieList = movies.map( movie => <MovieCard key={movie.id} id= {movie.id} movie={movie.title}/>
  )
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
