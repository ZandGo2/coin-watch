import React from 'react';
import styles from "./search.module.css";

const ListSearchCoin = ({data : {symbol,thumb}}) => {
    return (
        <div className={styles.listCoin}>
            <img src={thumb} alt={symbol}/>
            {symbol}
        </div>
    );
};

export default ListSearchCoin;