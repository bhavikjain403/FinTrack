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

const TechnicalAnalysiss = () => {
  return (
    <>
      <div className="progress-container">
        <Sidebar />
        <Container style={{ marginRight: "500px" }}>
        <TechnicalAnalysis width="100%" symbol="RELIANCE" showIntervalTabs />
        </Container>
      </div>
    </>
  );
};

export default TechnicalAnalysiss;
