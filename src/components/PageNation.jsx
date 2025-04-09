import styles from "./search.module.css";

const PageNation = ({ PageHandler, page }) => {
  return (
    <div className={styles.PageNation}>
      <button
        className={page == 1 ? styles.notActive : styles.active}
        onClick={() => PageHandler(-1)}
      >
        previous
      </button>
      <span className={page == 1 ? styles.ActiveSpan : styles.notActiveSpan}>
        1
      </span>
      <span className={page == 2 ? styles.ActiveSpan : styles.notActiveSpan}>
        2
      </span>
      <span>....</span>
      {page > 2 && page < 9 ? (
        <span className={styles.ActiveSpan}>{page}</span>
      ) : (
        ""
      )}
      <span>....</span>
      <span className={page == 9 ? styles.ActiveSpan : styles.notActiveSpan}>
        9
      </span>
      <span className={page == 10 ? styles.ActiveSpan : styles.notActiveSpan}>
        10
      </span>
      <button
        className={page == 10 ? styles.notActive : styles.active}
        onClick={() => PageHandler(1)}
      >
        next
      </button>
    </div>
  );
};

export default PageNation;
