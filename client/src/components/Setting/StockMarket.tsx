import Row from 'react-bootstrap/Row';
import { Button, Container, Modal, Paper, SimpleGrid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
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

const StockMarkett = () => {
  const midScreen = useMediaQuery("(min-width: 1300px)");
  const largeScreen = useMediaQuery("(min-width: 1750px)");
  return (
    <>
      <div className="general-layout">
        <Sidebar />
        <Container
        ml={largeScreen ? 600 : midScreen ? 320 : 280}
        mt={60} mb={60}
      >
        <Paper radius="md" p={largeScreen ? 100 : 30} shadow="lg" mt={30}>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <StockMarket exchange="BSE" />
        <TechnicalAnalysis width="100%" symbol="RELIANCE" showIntervalTabs />
      </SimpleGrid>
      </Paper>
        </Container>
      </div>
    </>
  );
};

export default StockMarkett;
