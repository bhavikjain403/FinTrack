import { Group, Paper, Text, SimpleGrid, Title } from "@mantine/core";
import { ChartLine, CurrencyRupee, ZoomMoney } from "tabler-icons-react";
import usePortfolioInfo from "../../hooks/usePortfolioInfo";

import ExpensesFunctions from "../../stats/expenses";
import PortfolioFunctions from "../../stats/portfolio";


/* interface StatsGridIconsProps {
  data: { title: string; value: string; diff: number }[];
} */

export function StatsOverview() {
  const {totalPortfolio} = usePortfolioInfo()
  const { totalExpenseByMonth, currentMonthYear } = ExpensesFunctions();
  const currentMonthExpense = Object.entries(totalExpenseByMonth).filter(
    (item) => item[0] === currentMonthYear
  );

  const data = [
    {
      title: "Portfolio Value",
      value: totalPortfolio,
      icon: <ChartLine />,
    },
    {
      title: "Expenses this month",
      value: currentMonthExpense.length ? Math.round(currentMonthExpense[0][1]*100)/100 : 0,
      icon: <ZoomMoney />,
    },
  ];

  const stats = data.map((stat) => {
    return (
      <Paper
        withBorder
        shadow="md"
        p="md"
        radius="lg"
        mt={10}
        ml={20}
        mr={20}
        mb={10}
        key={stat.title}
      >
        <Group position="apart" style={{height:"60px"}}>
          <Text size="md" color="dimmed">
            {stat.title}
          </Text>
          {stat.icon}
        </Group>

        <Group spacing="md" mt={15}>
          <Title order={2}>
            {" "}
            <CurrencyRupee
              size={20}
              strokeWidth={1.5}
              className="currency-icon"
            />{" "}
            {stat.value}{" "}
          </Title>
        </Group>
      </Paper>
    );
  });

  return (
    <div>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {stats}
      </SimpleGrid>
    </div>
  );
}
