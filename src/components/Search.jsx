import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { SearchCoin } from "../services/FechApi";
import { Commet } from "react-loading-indicators";
import ListSearchCoin from "./ListSearchCoin";

const Search = ({ selectHandler }) => {
  const [data, setData] = useState([]);
  const [inputData, setinputData] = useState("");
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setinputData(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const getDataSearch = async () => {
      const res = await SearchCoin(inputData);
      const json = await res.json();
      setData(json.coins);
      setLoading(false);
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
          {loading && (
            <div className={styles.loading}>
              <Commet
                color="#2a4cd0"
                size="medium"
                text="Loading"
                textColor=""
              />
            </div>
          )}
          {!loading &&
            data.map((item) => <ListSearchCoin key={item.id} data={item} />)}
        </div>
      )}
    </>
  );
};

export default Search;
