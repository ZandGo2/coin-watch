import React, { useEffect, useState } from "react";
import { ListAllCoin } from "../services/FechApi";
import { Commet } from "react-loading-indicators";
import styles from "../components/listCoin.module.css";
import ListCoin from "../components/ListCoin";
import PageNation from "../components/PageNation";
import Search from "../components/Search";

const HomePage = () => {
  const [ListCion, setListCion] = useState([]);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await ListAllCoin(page, currency);
      const json = await res.json();
      setListCion(json);
      setLoading(false);
    };
    getData();
  }, [page, currency]);

  const PageHandler = (num) => {
    if (page == 1 && num == -1) return;
    if (page == 10 && num == 1) return;
    setPage((page) => page + num);
  };

  const selectHandler = (e) => {
    setCurrency(e.target.value);
    console.log(currency);
  };

  return (
    <main>
      <Search selectHandler={selectHandler} />
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
      {loading && (
        <div className={styles.loading}>
          <Commet color="#2a4cd0" size="medium" text="Loading" textColor="" />
        </div>
      )}
      {!loading &&
        ListCion.map((item) => (
          <ListCoin key={item.id} data={item} currency={currency} />
        ))}
      <PageNation page={page} PageHandler={PageHandler} />
    </main>
  );
};

export default HomePage;
