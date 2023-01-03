import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Search() {
  // const location = useLocation();
  // const search = location.pathname.split("=").pop();

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          // value={search}
          onChange={(e) => {
            const value = e.target.value;
            console.log(value);
            setSearchText("value", value);

            navigate(`/search=${value}`);
          }}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
