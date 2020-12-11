import React from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Moviecard = ({ elem }) => {
  const history = useHistory();
  const [vid, setvid] = useState();
  useEffect(() => {
    const getthriler = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${elem.id}/videos?api_key=e58c9e58347cd4b8b603c47e71603365&language=en-US`
      );
      setvid(response.data);
    };
    getthriler();
  }, [elem.id]);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {vid && (
          <Card.Img
            onClick={() => history.push(`/Thriler`, { vid })}
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
          />
        )}
        <Card.Body>
          <Card.Title>{elem.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard;
