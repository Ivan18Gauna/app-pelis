import React from "react";
import MoviesGrid from "./MoviesGrid";
import styles from "./Home.module.css";
import { Search } from "./Search";
import { Link, useLocation } from "react-router-dom";
import { Header } from "./Header";

export default function Home() {
  const location = useLocation();
  const search = location.pathname.split("=").pop();

  return (
    <div className={styles.container}>
      <div>
        <Header/>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <MoviesGrid key={search} search={search}/>
      </div>
    </div>
  );
}
