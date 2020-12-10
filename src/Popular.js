import React, { useEffect } from "react";
import axios from "axios";
import Moviecard from "./Moviecard";
const Popular = ({ pages, rated, setrated, setpages }) => {
  useEffect(() => {
    const getmovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e58c9e58347cd4b8b603c47e71603365&language=en-US&page=${pages}`
      );
      setrated(response.data);
    };
    getmovies();
  }, [pages]);
  const pagesuiv = () => {
    setpages(pages + 1);
  };
  const pageprev = () => {
    if (pages > 1) setpages(pages - 1);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "1em",
        }}
      >
        {rated &&
          rated.results.map((elem) => {
            return <Moviecard elem={elem} />;
          })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1em",
          marginBottom: "1em",
        }}
      >
        <button onClick={pageprev}>
          <i class="fas fa-arrow-circle-left"></i>
        </button>
        <p
          style={{
            margin: "1em",
          }}
        >
          {pages}
        </p>
        <button onClick={pagesuiv}>
          <i class="fas fa-arrow-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Popular;
