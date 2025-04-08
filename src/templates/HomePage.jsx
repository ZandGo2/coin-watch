import React, { useEffect, useState } from "react";
import ListCoin from "../components/ListCoin";
import { ImOffice } from "react-icons/im";
// import { ListAllCoin } from "../services/FechApi";
import styles from "./home.module.css";

const HomePage = () => {
  const [ListCion, setListCion] = useState([]);

  useEffect(() => {
    const BASE_URL = "https://api.coingecko.com/api/v3/";
    const KEY = "CG-W5rveW9X7r8MHJa26dBdp5hY";

    const ListAllCoin = () => {
      const options = {
        method: "GET",
        headers: { accept: "application/json", "x-cg-demo-api-key": KEY },
      };

      fetch(
        `${BASE_URL}coins/markets?vs_currency=usd&per_page=20&page=1`,
        options
      )
        .then((res) => res.json())
        .then((res) => setListCion(res))
        .catch((err) => console.error(err));
    };
    ListAllCoin();
  }, []);
  console.log(ListCion);

  return (
    <main>
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
