const BASE_URL = "https://api.coingecko.com/api/v3/";
const KEY = "CG-W5rveW9X7r8MHJa26dBdp5hY";
const options = {
  method: "GET",
  headers: { accept: "application/json", "x-cg-demo-api-key": KEY },
};

const ListAllCoin = async (page, currency) => {
  return fetch(
    `${BASE_URL}coins/markets?vs_currency=${currency}&per_page=20&page=${page}`,
    options
  );
};

const SearchCoin = (coin) => {
  return fetch(`${BASE_URL}search?query=${coin}`, options);
};

export { ListAllCoin, SearchCoin };
