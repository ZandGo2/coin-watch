import styles from "./layout.module.css";
import HomePage from "../templates/HomePage";

const Layouts = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>Crypto App</h2>
        <div>
          <p>
            <span>BotoStart | </span>
            React.Js Full Course
          </p>
        </div>
      </header>
      <HomePage />
      <footer>
        <p>Developed by Mobin with Love</p>
      </footer>
    </>
  );
};

export default Layouts;
