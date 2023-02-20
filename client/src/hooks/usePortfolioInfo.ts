// import axios from "axios";
import { useEffect, useState } from "react";
import { portfolioFallback } from "../data/portfolio-fallback";

function usePortfolioInfo() {
  const [holdings, setHoldings] = useState([]);
  useEffect(() => {
    const getPortfolio = async () => {
      try {
        // const request = await axios.post(
        //   "https://5460-2402-3a80-740-d55c-b550-3718-fdf-b691.in.ngrok.io/portfolio",
        //   { url: "https://api.kite.trade/portfolio/holdings" }
        // );
        // console.log(request.data.data)
        setHoldings(portfolioFallback.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPortfolio();
  }, []);

  const portfolioData = holdings?.map((item: any) => (({
    key: item.tradingsymbol,
    value: Math.round(item.quantity * item.last_price),
  })));


  let totalPortfolio = 0;
  if (holdings) {
    for (const item of holdings) {
      totalPortfolio += item.quantity * item.last_price;
    }
  }

  return {portfolioData, totalPortfolio}
}

export default usePortfolioInfo;
