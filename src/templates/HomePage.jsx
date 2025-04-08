import React, { useEffect, useState } from "react";

import { ListAllCoin } from "../services/FechApi";

import styles from "../components/listCoin.module.css";

import ListCoin from "../components/ListCoin";
import PageNation from "../components/PageNation";
// import Search from "../components/Search";

const HomePage = () => {
  const [ListCion, setListCion] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await ListAllCoin();
      const json = await res.json();
      setListCion(json);
    };
    getData();
  }, []);
  console.log(ListCion);

  return (
    <main>
      {/* <Search /> */}
      <div className={styles.header}>
        <div className={styles.nameCoin}>
          <span>Coin</span>
          <span>Name</span>
        </div>
        <div className={styles.nameCoin}>
          <span>Price</span>
          <span>24h</span>
          <span>Volume</span>
        </div>
        <span>Chart</span>
      </div>
      {ListCion.map((item) => (
        <ListCoin key={item.id} data={item} />
      ))}
      <PageNation/>
    </main>
  );
};

export default HomePage;
