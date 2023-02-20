import Sidebar from "../Sidebar/Sidebar";
import { Button, Container, Modal, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  StockMarket,
  MarketOverview,
  EconomicCalendar,
  TechnicalAnalysis,
  Timeline,
} from "react-ts-tradingview-widgets";
import TradingViewWidget from "./TradingViewWidget";
import Main from '../Budget/Main';

const DefaultWidget = () => {
  const midScreen = useMediaQuery("(min-width: 1300px)");
  const largeScreen = useMediaQuery("(min-width: 1750px)");
  return (
    <>
      <div className="general-layout">
      <Sidebar />
      <Container
        ml={largeScreen ? 600 : midScreen ? 320 : 250}
        mt={60} mb={30}
      >
        <TradingViewWidget />
        <Paper radius="md" p={largeScreen ? 100 : 30} shadow="lg" mt={30}>
        <Timeline displayMode="compact" width="100%" height={400} />
      </Paper>
      </Container>
      </div>
    </>
  );
};

export default DefaultWidget;
