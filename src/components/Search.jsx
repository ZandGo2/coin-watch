import React from "react";
import styles from "./search.module.css";

const Search = ({selectHandler}) => {
  return (
    <div className={styles.containerSearch}>
      <input placeholder="Search" />
      <select defaultValue={"usd"} onChange={selectHandler}>
        <option value="usd" >USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
};

export default Search;
