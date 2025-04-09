import down from "../assets/chart-down.svg";
import up from "../assets/chart-up.svg";
import styles from "./listCoin.module.css";

const ListCoin = ({
  data: {
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
    id,
  },
  currency,
}) => {
  const sings = {
    usd: "$",
    eur: "€",
    jpy: "¥",
  };

  return (
    <article>
      <div className={styles.DivImage}>
        <img src={image} alt={symbol} />
        <p>{symbol}</p>
        <p>{id}</p>
      </div>
      <div className={styles.DivPrice}>
        <p>
          {sings[currency]} {current_price.toLocaleString()}
        </p>
        <p
          style={
            price_change_percentage_24h > 0
              ? { color: "rgb(6, 249, 6)" }
              : { color: "red" }
          }
        >
          {price_change_percentage_24h.toFixed(2)} %
        </p>
        <p>
          {sings[currency]} {total_volume.toLocaleString()}
        </p>
      </div>
      <div>
        <img
          className={styles.chart}
          src={price_change_percentage_24h > 0 ? up : down}
          alt="chartUp or chartDown"
        />
      </div>
    </article>
  );
};

export default ListCoin;
