import {
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Group,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePicker } from "@mantine/dates";
import axios from "axios";
import { useDispatch } from "react-redux";
import { CurrencyRupee } from "tabler-icons-react";

import { setSingleUser } from "../../Redux/userSlice";
import { setAltModalState } from "../../Redux/helperSlice";
import { toast } from "react-hot-toast";

function AddExpense() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("currentToken");
  const dispatch = useDispatch();

  const form = useForm({
    initialValues: {
      name: "Random expense",
      amount: 0,
      date: new Date(),
      tag: "Uncategorized",
      comments: "",
    },

    validate: (values) => ({
      name: values.name === undefined ? "Name is required" : null,
      amount: values.amount === undefined ? "Amount is required" : null,
      date: values.date === undefined ? "Date is required" : null,
    }),
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            console.log("expense values :", values)
            toast("Adding Expense...", { icon: "ℹ️" });
            await axios
              .post(
                `https://hack-niche-outliers.vercel.app/api/v1/expense/${userId}`,
                values
              )
              .then((res) => console.log(res));
            form.reset();
            await fetch(
              `https://hack-niche-outliers.vercel.app/api/v1/users/${userId}`,
              {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
              }
            )
              .then((res) => res.json())
              .then((data) => {
                dispatch(setSingleUser(data));
                toast.success("Expense added!")
                console.log(data);
              });
          } catch (error) {
            console.log(error);
          }
          dispatch(setAltModalState());
        })}
      >
        <TextInput
          required
          label="Name"
          placeholder="Add a name for this expense"
          {...form.getInputProps("name")}
        />
        <NumberInput
          placeholder="Amount"
          label="Add expense amount"
          icon={<CurrencyRupee size={16} />}
          required
          {...form.getInputProps("amount")}
        />
        <DatePicker
          placeholder="Pick date"
          label="Date"
          {...form.getInputProps("date")}
        />
        <TextInput
          label="Category"
          placeholder="Add a category for this expense"
          {...form.getInputProps("tag")}
        />
        <Textarea
          label="Comments"
          placeholder="Add additional comments"
          {...form.getInputProps("comments")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
export default AddExpense;
