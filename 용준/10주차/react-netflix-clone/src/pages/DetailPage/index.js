import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const DetailPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(`/movie/${movieId}`);
        setMovie(request.data);
      } catch (e) {
        setMovie(null);
      }
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>...loading</div>;
  else {
    return (
      <section>
        <img
          className="modal__poster-img"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="poster"
        />
      </section>
    );
  }
};

export default DetailPage;
