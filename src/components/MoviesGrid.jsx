import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../utils/httpClient";
import MoviesCard from "./MoviesCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MoviesGrid({ search }) {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    var searchUrl;
    setIsLoading(true);
    if (search.length != 0) {
      searchUrl =
        search === "/"
          ? `/discover/movie?page=${page}`
          : `/search/movie?query=${search}&page=${page}`;
    } else {
      searchUrl = `/discover/movie?page=${page}`;
    }
    get(searchUrl).then((data) => {
      setMovie((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <div>
        <ul className={styles.moviesGrid}>
          {movies.map((movie) => {
            return <MoviesCard key={movie.id} movie={movie} />;
          })}
        </ul>
      </div>
    </InfiniteScroll>
  );
}
