import React from "react";
import { Container, Modal, Paper, SimpleGrid, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Edit } from "tabler-icons-react";
import { useDispatch, useSelector } from "react-redux";

import PortfolioTotals from "./PortfolioTotals";
import { PortfolioOverview } from "./PortfolioOverview";
import PortfolioByCategoryChart from "./PortfolioByCategoryChart";
import { PortfolioOverviewTable } from "./PortfolioOverviewTable";
import { RootState } from "../../Redux/store";
import { setGoalsModalState } from "../../Redux/helperSlice";
import GoalEditForm from "./EditGoalsForm";
import SuggestionsStocks from "./SuggestionsStocks";
import usePortfolioInfo from "../../hooks/usePortfolioInfo";

const Main = () => {
  
  const {portfolioData, totalPortfolio} = usePortfolioInfo()

  const midScreen = useMediaQuery("(min-width: 1300px)");
  const largeScreen = useMediaQuery("(min-width: 1750px)");
  const dispatch = useDispatch();
  const goalsModalState = useSelector(
    (state: RootState) => state.helper.goalsModalState
  );
  return (
    <Container
      ml={largeScreen ? 600 : midScreen ? 380 : 280}
      mt={60}
      >
      <Paper radius="md" p={30}>
        <Title order={1} align="center" style={{ color:"#1c7ed6"}}>
          Portfolio Overview
        </Title>
        <PortfolioTotals portfolioData={portfolioData} totalPortfolio={totalPortfolio} />
        {/* <PortfolioByCategoryChart /> */}
        <PortfolioOverview totalPortfolio={totalPortfolio} />
        <Edit size={17} onClick={() => dispatch(setGoalsModalState())} />
        <Modal
          opened={goalsModalState}
          onClose={() => dispatch(setGoalsModalState())}
          title="Edit Goals"
          transition="pop-top-right">
          <GoalEditForm />
        </Modal>
      </Paper>
      {/* <PortfolioOverviewTable /> */}
      <SuggestionsStocks portfolioData={portfolioData} />
    </Container>
  );
};

export default Main;
