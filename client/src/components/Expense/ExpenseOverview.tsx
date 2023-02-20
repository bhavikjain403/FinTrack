import {
  Group,
  Paper,
  Text,
  ThemeIcon,
  SimpleGrid,
  Title,
} from "@mantine/core";

import { ArrowUpRight, ArrowDownRight, CurrencyRupee, ArrowRight } from "tabler-icons-react";
import ExpensesFunctions from "../../stats/expenses";

export function ExpenseOverview() {
  const {
    monthlyDifference,
    monthlyExpenses,
    prevMonthlyExpenses,
    prevTwoMonthlyDifference,
  } = ExpensesFunctions();

  const data = [
    {
      title: "Expenses this month",
      value: Math.round(monthlyExpenses*100)/100,
      diff: Math.round(monthlyDifference*100)/100,
    },
    {
      title: "Expenses last month",
      value: Math.round(prevMonthlyExpenses*100)/100,
      diff: Math.round(prevTwoMonthlyDifference*100)/100,
    },
  ];

  const stats = data.map((stat) => {
    const DiffIcon = stat.diff > 0 ? ArrowUpRight : stat.diff < 0 ? ArrowDownRight: ArrowRight;

    return (
      <Paper
        withBorder
        shadow="md"
        p="md"
        radius="lg"
        mt={30}
        ml={20}
        mr={20}
        key={stat.title}
      >
        <Group position="apart">
          <div>
            <Text color="dimmed" transform="uppercase" weight={700} size="xs">
              {stat.title}
            </Text>
            <Title order={3} mt="xs">
              <CurrencyRupee
                size={22}
                strokeWidth={2.3}
                className="currency-icon-overview"
              />{" "}
              {stat.value}
            </Title>
          </div>
          <ThemeIcon
            color="gray"
            variant="light"
            sx={(theme) => ({
              color: stat.diff > 0 ? theme.colors.teal[6] : stat.diff < 0 ? theme.colors.red[6] : theme.colors.gray[6],
            })}
            size={38}
            radius="md"
          >
            <DiffIcon size={58} />
          </ThemeIcon>
        </Group>
        <Text color="dimmed" size="sm" mt="md">
          <Text
            component="span"
            color={stat.diff > 0 ? "teal" : stat.diff < 0 ? "red" : "gray"}
            weight={700}
          >
            {stat.diff} % &nbsp;
          </Text>
          {stat.diff > 0 ? "increase" : stat.diff < 0 ? "decrease" : "change as "} compared to previous month
        </Text>
      </Paper>
    );
  });

  return (
    <div>
      <Title align="center" order={1} mb={10} style={{ color:"#1c7ed6" }}>
        Expense Tracker
      </Title>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {stats}
      </SimpleGrid>
    </div>
  );
}
