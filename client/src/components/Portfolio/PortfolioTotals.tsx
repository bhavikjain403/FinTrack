import React, { useEffect } from "react";
import { Text, Paper, Center, Group, Title } from "@mantine/core";
import { Cell, CurrencyRupee } from "tabler-icons-react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

import PortfolioFunctions from "../../stats/portfolio";
import { Pie, PieChart, Tooltip } from "recharts";
import { COLORS, renderLabel } from "../Expense/ExpenseCategoryChart";

function PortfolioTotals({ portfolioData, totalPortfolio }) {

useEffect(()=>{console.log(portfolioData)},[portfolioData])

  const totalPortfolioTargetValue = useSelector(
    (state: RootState) => state.user.goals.totalValueTarget
  );
  const { totalPortfolioValue } = PortfolioFunctions();
  const data = [
    {
      title: "Total Portfolio Value",
      value: totalPortfolioValue,
      goal: totalPortfolioTargetValue,
      percentOfTotal: Math.floor(
        (totalPortfolioValue / totalPortfolioTargetValue) * 100
      ),
      diff: Math.floor((totalPortfolioValue / totalPortfolioTargetValue) * 100),
    },
  ];

  
  console.log(totalPortfolio)

  const stats = data.map((stat) => {
    return (
      <Paper radius="md" p="md" pb={20} mt={20} key={stat.title}>
        <Title order={4} ml={50} mb={10}>
          Current Portfolio Value
        </Title>
        <Title order={3} ml={50}>
          <CurrencyRupee size={22} strokeWidth={2.2} className="currency-icon" />
          {totalPortfolio}
        </Title>
        <Center>
          <Group>
            <PieChart width={500} height={300}>
              <Tooltip />
              <Pie
                data={portfolioData}
                dataKey="value"
                nameKey="key"
                cx="50%"
                cy="50%"
                labelLine={true}
                label={renderLabel}
                outerRadius={130}
                fill="#8884d8"
              >
                {portfolioData?.map((entry:any, index:any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />))}

              </Pie>
            </PieChart>
          </Group>
        </Center>
        {/* <Group>
          <Text ml={30}>
            Goal:{" "}
            <CurrencyRupee
              size={18}
              strokeWidth={1.5}
              className="currency-icon"
            />
            {stat.goal}
          </Text>
          <Text>
            Difference:{" "}
            <CurrencyRupee
              size={18}
              strokeWidth={1.5}
              className="currency-icon"
            />
            {stat.goal - stat.value}
          </Text>
        </Group> */}
      </Paper>
    );
  });

  return <div>{stats}</div>;
}

export default PortfolioTotals;
