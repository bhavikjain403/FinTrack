import { Paper, Title } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MiniChart } from "react-ts-tradingview-widgets";

function SuggestionsStocks({portfolioData}) {

  const [stocks, setStocks] = useState([
  "SBIN",
  "INFY",
  "HDFCBANK"])

/*   useEffect(()=>{
    console.log(portfolioData)
    const getSuggestions = async() => {
      const holdings = portfolioData.map((item:any)=>item.key+'.NS')
      console.log(holdings)  
      const suggestions = await axios.post("https://f008-2402-3a80-4173-68d6-e0c4-642d-3960-d992.in.ngrok.io/recommend", {holdings:holdings})
      setStocks(suggestions.data.output)
     } 
     getSuggestions()
  },[portfolioData]) */

  // const stocks = ["lici"];

  return (
    <Paper my={"lg"} px={"lg"} py={"sm"} mb={60}>
      <Title>Suggestions</Title>

      <Paper>
        {stocks.map((item) => (
          <MiniChart symbol={item} colorTheme="light" width="100%" />
        ))}
      </Paper>
    </Paper>
  );
}

export default SuggestionsStocks;
