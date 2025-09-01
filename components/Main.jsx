import React, { useEffect } from "react";
import films from "../data/films";
import { useState } from "react";




const Main = () => {

  const [search, setSearch] = useState("");
  const [searchFilm, setSearchFilm] = useState(films)

  useEffect(() => {

    const filteredFilms = films.filter((film) =>
      film.genre.toLowerCase().includes(search.toLowerCase())

    );

    setSearchFilm(filteredFilms);
  }, [search]);


  const handleForm = (event) => {
    event.preventDefault();

  }

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className='btn  btn-primary'>Cerca</button>
      </form>

      <ul className="list-unstyled">
        {searchFilm.map((filmsMapped, index) => (
          <li className="m-5" key={index}>
            <h5>{filmsMapped.title}</h5>
            <p>{filmsMapped.genre}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;