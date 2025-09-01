import React, { useEffect, useState } from "react";
import films from "../data/films";

const Main = () => {
  const [search, setSearch] = useState("");
  const [searchFilm, setSearchFilm] = useState(films);

  useEffect(() => {
    let filteredFilms

    if (search === "") {
      filteredFilms = films;
    } else {
      filteredFilms = films.filter((film) =>
        film.genre.toLowerCase().includes(search.toLowerCase()) ||
        film.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setSearchFilm(filteredFilms);
  }, [search]);

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <select
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        >
          <option value="">-- Tutti i generi --</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </form>

      <ul className="list-unstyled">
        {searchFilm.map((film, index) => (
          <li className="m-5" key={index}>
            <h5>{film.title}</h5>
            <p>{film.genre}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;