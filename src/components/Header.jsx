import styles from "./Header.module.css";
import astronaut from "./astronaut.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to='/'>
          <div className={styles.title}>
            <h1>APP-PELIS</h1>
          </div>
        </Link>
        
          <div className={styles.logo}>
            <img src={astronaut} alt="logo" width={100} />
          </div>
       
        <a href='https://mi-portfolio-one.vercel.app'>
          <h1 className={styles.myname}>Ivan Gauna</h1>
        </a>
      </div>
    </div>
  );
}
