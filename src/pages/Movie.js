import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";


function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id
  console.log(params);


  useEffect(() =>{
    fetch(`http://localhost:3000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error('Error', error))
  }, [movieId])

  if(!movie.title){
    return <h1>Loading</h1>
  }

  const generes= movie.generes.map(genere =>
    <span key={genere}>{genere}</span>
  )

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {generes}
      </main>
    </>
  );
};

export default Movie;
