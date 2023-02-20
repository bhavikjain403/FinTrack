import React from "react";
import { Container, Grid, Paper, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { StatsOverview } from "../Dashboard/StatsOverview";
import { IncomeExpenseOverviewTable } from "./IncomeExpenseOverviewTable";
import { SavingsGoalOverview } from "./SavingsGoalOverview";

const Main = () => {
  const midScreen = useMediaQuery("(min-width: 1300px)");
  const largeScreen = useMediaQuery("(min-width: 1750px)");
  return (
    <Container
      ml={largeScreen ? 600 : midScreen ? 320 : 280}
      mt={60}>
      <Paper radius="md" p={30}>
        <Title order={1} align="center" mb={30} style={{ color:"#1c7ed6" }}>
          Financial Overview
        </Title>
        <StatsOverview />
      </Paper>
      <Grid mt={30} mb={30}>
        <Grid.Col md={7}>
          <Text weight={700} size="lg" mb={10} align="center" style={{ color:"#1c7ed6", fontSize:"25px" }}>
            Latest Expenses
          </Text>
          <Paper>
            <IncomeExpenseOverviewTable />
          </Paper>
        </Grid.Col>
        <Grid.Col md={5}>
          <Text weight={700} size="lg" mb={10} align="center" style={{ color:"#1c7ed6", fontSize:"25px" }}>
            Budget Tracker
          </Text>
          <SavingsGoalOverview />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Main;
