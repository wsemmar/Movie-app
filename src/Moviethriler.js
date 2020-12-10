import React from "react";
import { useLocation } from "react-router-dom";
const MovieThriler = () => {
  const location = useLocation();
  const { vid } = location.state;

  return (
    <div>
      {vid.results[0] ? (
        <iframe
          width="640"
          height="360"
          frameborder="0"
          src={`https://www.youtube.com/embed/${vid.results[0].key}?autoplay=1`}
        />
      ) : (
        <div>
          <h1>Sorry</h1>
          <h1>Trailer indisponible</h1>
        </div>
      )}
    </div>
  );
};

export default MovieThriler;
