import React from "react";
import { Progress, Text, Group, Badge, Paper } from "@mantine/core";
import { RootState } from "../../Redux/store";
import ExpensesFunctions from "../../stats/expenses";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export function SavingsGoalOverview() {
  // Expense Data by category
  const { totalExpenseByCategoryCurrentMonth } = ExpensesFunctions();
  const expenseData = Object.entries(totalExpenseByCategoryCurrentMonth).map(
    (item) => item
  );

  // Budget Data from Redux Store
  const budgetData = useSelector((state: RootState) => state.user.user.budget);
  const userName = useSelector((state: RootState) => state.user.user.username);

  // Check if categories of expenses and budget are the same
  const categoryExpense = expenseData.filter((item) =>
    item[0].toLowerCase() === budgetData[0]?.tag?.toLowerCase() ? item : null
  );

  const amountSpent = categoryExpense?.[0]?.[1] || 0;
  console.log("budgetData is here", budgetData);
  const frac = budgetData?.[0] ? amountSpent / budgetData[0].amount : 0;

  if (budgetData) {
    return (
      <>
        {budgetData.map((item: any) => {
          return (
            <Paper radius="md" mb={20} withBorder p={30}>
              <Text align="center" weight={700}>
                {budgetData.length ? item.title : ""}
              </Text>

              <Text
                color="dimmed"
                align="center"
                size="sm"
                color={Math.floor(frac * 100) > 99 ? "red" : "blue"}>
                Budget: {budgetData.length ? item.amount : 0} INR
              </Text>
              <Group position="apart" mt="xs">
                <Text size="sm" color="dimmed">
                  Already spent:
                </Text>
                <Text size="sm" color="dimmed">
                  {expenseData.length && categoryExpense
                    ? //@ts-ignore

                      Math.floor(frac * 100)
                    : 0}
                  %
                </Text>
              </Group>
              <Progress
                value={
                  expenseData.length && categoryExpense
                    ? //@ts-ignore
                      Math.floor(frac * 100)
                    : 0
                }
                mt={5}
                color={Math.floor(frac * 100) > 99 ? "red" : "blue"}
              />
              <Group position="apart" mt="md">
                <Text size="sm">
                  {/*@ts-ignore */}
                  Spent:{" "}
                  {expenseData.length && categoryExpense
                    ? categoryExpense[0]
                      ? amountSpent
                      : 0
                    : 0}{" "}
                  INR
                </Text>
                <Badge
                  size="sm"
                  color={Math.floor(frac * 100) > 99 ? "red" : "blue"}>
                  {budgetData.length && item.tag}
                </Badge>
              </Group>
            </Paper>
          );
        })}
      </>
    );
  } else {
    return (
      <Paper>
        <Button color="white">
          <Link to={"/budget/" + userName}>Add your budget</Link>
        </Button>
      </Paper>
    );
  }
}
