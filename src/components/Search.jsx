import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { SearchCoin } from "../services/FechApi";
import ListSearchCoin from "./ListSearchCoin";

const Search = ({ selectHandler }) => {
  const [data, setData] = useState([]);
  const [inputData, setinputData] = useState("");

  const changeHandler = (e) => {
    setinputData(e.target.value);
  };

  useEffect(() => {
    const getDataSearch = async () => {
      const res = await SearchCoin(inputData);
      const json = await res.json();
      setData(json.coins);
    };
    getDataSearch();
  }, [inputData]);

  return (
    <>
      <div className={styles.containerSearch}>
        <input
          value={inputData}
          placeholder="Search"
          onChange={changeHandler}
        />
        <select defaultValue={"usd"} onChange={selectHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
      </div>
      {!!inputData && (
        <div className={styles.containerSearchListCoin}>
          {data.map((item) => (
            <ListSearchCoin key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
