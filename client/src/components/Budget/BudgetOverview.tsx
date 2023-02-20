import {
  Progress,
  Text,
  Group,
  Badge,
  Paper,
  Title,
  SimpleGrid,
  Modal,
} from "@mantine/core";
import { CurrencyRupee, Edit } from "tabler-icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../Redux/store";
import { setAltModalState } from "../../Redux/helperSlice";
import EditBudget from "./EditBudget";
import { BudgetDataProps } from "../../types/types";
import ExpensesFunctions from "../../stats/expenses";

export function BudgetOverview() {
  const dispatch = useDispatch();

  // Expense Data by category
  const { totalExpenseByCategoryCurrentMonth } = ExpensesFunctions();
  const expenseData = Object.entries(totalExpenseByCategoryCurrentMonth).map(
    (item) => item
  );

  // State for the EditModal State
  const altModalState = useSelector(
    (state: RootState) => state.helper.altModalState
  );
  // State for the Edit Expense Modal
  const [budgetDetails, setBudgetDetails] = useState({});

  // Budget Data from Redux Store
  const budgetData = useSelector((state: RootState) => state.user.user.budget);

  const stats = budgetData.map((stat: BudgetDataProps) => {
    // Check if categories of expenses and budget are the same
    let tempCategoryExpense = expenseData.filter((item) =>
      item[0] === stat.tag ? item : null
    );
    const categoryExpense = tempCategoryExpense.length===0 ? [[0],[0]] : tempCategoryExpense

    const amountSpent = categoryExpense[0][1] || 0
    console.log("categoryExpense: ",expenseData, stat)
    return (
      <Paper radius="md" p={30} withBorder shadow="md" key={stat._id}>
        <Title align="center" mt="xs" order={4}>
          {stat.title}
        </Title>
        <Text color={Math.floor((amountSpent / budgetData[0].amount) * 100)>99?"red":"blue"} align="center" size="sm">
          Budget: {stat.amount}
          <CurrencyRupee
            size={16}
            strokeWidth={1.5}
            className="currency-icon"
          />{" "}
        </Text>
        <Group position="apart" mt="xs">
          <Text size="sm" color="dimmed">
            Already spent: {/* @ts-ignore */}
            {Math.floor((amountSpent / stat.amount) * 100)}%
          </Text>
        </Group>
        <Progress
          //@ts-ignore
          value={Math.floor((amountSpent / stat.amount) * 100)}
          mt={5}
          color={Math.floor((amountSpent / budgetData[0].amount) * 100)>99?"red":"blue"}
        />
        <Group position="apart" mt={20} mb={20}>
          <Text size="sm" color="dimmed">
            Spent: {amountSpent} of {stat.amount}
            <CurrencyRupee
              size={16}
              strokeWidth={1.5}
              className="currency-icon"
            />
            <Text size="sm" color="dimmed">
              {/* @ts-ignore */}
              Left: {stat.amount - amountSpent}
              <CurrencyRupee
                size={16}
                strokeWidth={1.5}
                className="currency-icon"
              />
            </Text>
          </Text>
          {stat.tag ? <Badge size="md" color={Math.floor((amountSpent / budgetData[0].amount) * 100)>99?"red":"blue"}> {stat.tag} </Badge> : null}
        </Group>
        <Link to={""} className="edit-icon">
          <Edit
            size={18}
            onClick={() => {
              dispatch(setAltModalState());
              // Gets the ID of the current row to display data on the modal
              setBudgetDetails(stat);
            }}
          />
        </Link>
      </Paper>
    );
  });

  return (
    <div>
      <Title align="center" order={1} mb={40} style={{ color:"#1c7ed6"}}>
        Budget Planner Overview
      </Title>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {stats}
      </SimpleGrid>
      <Modal
        opened={altModalState}
        onClose={() => dispatch(setAltModalState())}
        padding="md"
        size="lg"
      >
        <EditBudget {...budgetDetails} />
      </Modal>
    </div>
  );
}
