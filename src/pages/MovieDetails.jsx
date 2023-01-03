import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { Header } from "../components/Header";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsloading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsloading(true);
    get(`/movie/${movieId}`).then((data) => {
      setIsloading(false);
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div>
      <Header />
      <div className={styles.detailsContainers}>
        <img
          className={`${styles.col} ${styles.movieImage}`}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={`${styles.col} ${styles.movieDetails}`}>
          <div>
            <p className={styles.firstItem}>Title: {movie.title}</p>
          </div>
          <div>
            <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
          <div>Description: {movie.overview}</div>
        </div>
      </div>
    </div>
  );
}
