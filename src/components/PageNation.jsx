import React from 'react';
import styles from "./search.module.css";


const PageNation = () => {
    return (
        <div className={styles.PageNation}>
            <button className={styles.notActive}>previous</button>
            <span className={styles.notActiveSpan}>1</span>
            <span className={styles.ActiveSpan}>2</span>
            <span>....</span>
            <span>{4} ...</span>
            <span className={styles.ActiveSpan}>9</span>
            <span className={styles.notActiveSpan}>10</span>
            <button className={styles.active}>next</button>
        </div>
    );
};

export default PageNation;