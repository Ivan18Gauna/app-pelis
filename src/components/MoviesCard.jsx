import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export default function MoviesCard({ movie }) {
  
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div>
      <li className={styles.movieCard}>
        <Link to={"/movie/" + movie.id}>
          <img
            width={230}
            height={345}
            className={styles.movieImage}
            src={imageUrl}
            alt={movie.title}
          />
        </Link>
          <div className={styles.title}>{movie.title}</div>
      </li>
    </div>
  );
}
