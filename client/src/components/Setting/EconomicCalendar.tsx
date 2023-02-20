import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "../Sidebar/Sidebar";
import {
  StockMarket,
  MarketOverview,
  EconomicCalendar,
  TechnicalAnalysis,
  Timeline,
} from "react-ts-tradingview-widgets";
import TradingViewWidget from "./TradingViewWidget";

const EconomicCalendarr = () => {
  return (
    <>
      <div className="progress-container">
        <Sidebar />
        <Container>
          <Row>
            <Col>
            <div style={{fontWeight: '800', fontSize:'28px'}}>Economic Calendar to keep you updated with the latest events</div>
            <EconomicCalendar /></Col>


            <Col><div style={{fontWeight: '800', fontSize:'28px'}}>Take a look at the latest Forex, Bonds, Indices and Commodities</div>
            <MarketOverview /></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EconomicCalendarr;
