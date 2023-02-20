import Container from 'react-bootstrap/Container';
import Sidebar from "../Sidebar/Sidebar";
import {
  StockMarket,
  MarketOverview,
  EconomicCalendar,
  TechnicalAnalysis,
  Timeline,
} from "react-ts-tradingview-widgets";
import TradingViewWidget from "./TradingViewWidget";

const MarketOvervieww = () => {
  return (
    <>
      <div className="progress-container">
        <Sidebar />
        <Container style={{ marginRight: "500px" }}>
          <MarketOverview />
        </Container>
      </div>
    </>
  );
};

export default MarketOvervieww;
