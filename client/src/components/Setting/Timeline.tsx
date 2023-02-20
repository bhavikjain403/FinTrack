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

const Timelinee = () => {
  return (
    <>
      <div className="progress-container">
        <Sidebar />
        <Container style={{ marginRight: "500px" }}>
        <Timeline displayMode="compact" width="100%" />
        </Container>
      </div>
    </>
  );
};

export default Timelinee;
