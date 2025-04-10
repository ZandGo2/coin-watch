import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./modal.module.css";
import { ChartCoin } from "../services/FechApi";

const Modal = ({ data, signModel, currency, setModal }) => {
  const { image, symbol, current_price, high_24h, market_cap, id } = data;
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);
  const [typeChart, setTypeChart] = useState("prices");

  const btnHandler = (e) => {
    setTypeChart(e.target.name);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await ChartCoin(id, currency);
      const json = await res.json();
      const prices = json[typeChart];
      const categories = prices.map((item) => {
        const date = new Date(item[0]);
        return `${date.getHours()}:${String(date.getMinutes()).padStart(
          2,
          "0"
        )}`;
      });
      const priceData = prices.map((item) => item[1]);
      setChartOptions({
        chart: {
          height: 350,
          type: "line",
          zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        title: {
          text: "Price Trend",
          align: "left",
          style: {
            fontSize: "20px",
            color: "#ffffff",
          },
        },
        xaxis: {
          categories,
          labels: {
            style: {
              colors: "#ffffff",
            },
          },
        },
      });
      setChartSeries([
        {
          name: "Price",
          data: priceData,
        },
      ]);
    };
    getData();
  }, [typeChart]);

  return (
    <div className={styles.modalDiv}>
      <div className={styles.closeDiv} onClick={() => setModal(false)}>
        <span>X</span>
      </div>
      <div className={styles.container}>
        <div className={styles.imageDiv}>
          <img src={image} alt={symbol} />
          <span>{symbol}</span>
        </div>
        <div className={styles.chartDiv}>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={350}
          />
        </div>
        <div className={styles.btnDiv}>
          <button
            name="prices"
            onClick={btnHandler}
            className={typeChart == "prices" ? styles.active : styles.notActive}
          >
            Prices
          </button>
          <button
            name="market_caps"
            onClick={btnHandler}
            className={
              typeChart == "market_caps" ? styles.active : styles.notActive
            }
          >
            Market Caps
          </button>
          <button
            name="total_volumes"
            onClick={btnHandler}
            className={
              typeChart == "total_volumes" ? styles.active : styles.notActive
            }
          >
            Total Volumes
          </button>
        </div>
        <div className={styles.pDiv}>
          <p>
            <span>Price : </span> {signModel} {current_price.toLocaleString()}
          </p>
          <p>
            <span>ATH : </span> {signModel} {high_24h}
          </p>
          <p>
            <span>Market Cap : </span> {signModel} {market_cap}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
