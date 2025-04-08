import React, { useEffect, useState } from "react";

import { ListAllCoin } from "../services/FechApi";

import styles from "./home.module.css";

import ListCoin from "../components/ListCoin";
// import Search from "../components/Search";

const HomePage = () => {
  const [ListCion, setListCion] = useState([]);

  useEffect(() => {
    const getData =async ()=>{
      const res = await  ListAllCoin()
      const json = await res.json()
      setListCion(json)
    }
    getData()
  }, []);
  console.log(ListCion);

  return (
    <main>
      {/* <Search /> */}
      <div className={styles.container}>
        <div className={styles.firstDiv}>
          <span>Coin</span>
          <span>Name</span>
        </div>
        <div>
          <span>Price</span>
          <span>24h</span>
          <span>Total Volume</span>
        </div>
        <div></div>
      </div>
      {ListCion.map((item) => (
        <ListCoin key={item.id} data={item} />
      ))}
    </main>
  );
};

export default HomePage;
