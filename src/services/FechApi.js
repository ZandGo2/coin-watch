const BASE_URL = "https://api.coingecko.com/api/v3/";
const KEY = "CG-W5rveW9X7r8MHJa26dBdp5hY";

const ListAllCoin = async () => {
  const options = {
    method: "GET",
    headers: { accept: "application/json", "x-cg-demo-api-key": KEY },
  };
  return fetch(`${BASE_URL}coins/markets?vs_currency=usd&per_page=20&page=1`, options)
};

export { ListAllCoin };