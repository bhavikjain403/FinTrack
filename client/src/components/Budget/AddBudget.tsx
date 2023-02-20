import {
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Group,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { CurrencyRupee } from "tabler-icons-react";

import { setSingleUser } from "../../Redux/userSlice";
import { setModalState } from "../../Redux/helperSlice";
import { toast } from "react-hot-toast";

function AddBudget() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("currentToken");
  const dispatch = useDispatch();

  const form = useForm({
    initialValues: {
      title: "Random budget",
      amount: 0,
      tag: "Uncategorized",
      comments: "",
    },
    validate: (values) => ({
      name: values.title === undefined ? "Name is required" : null,
      amount: values.amount === undefined ? "Budget is required" : null,
    }),
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            console.log("budget values: ",values)
            toast("Adding Budget...", { icon: "ℹ️" });
            await axios
              .post(
                `https://hack-niche-outliers.vercel.app/api/v1/budget/${userId}`,
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
                toast.success("Budget added!")
                console.log(data);
              });
          } catch (error) {
            console.log(error);
          }
          dispatch(setModalState());
        })}
      >
        <TextInput
          required
          label="Name"
          placeholder="Add a name for this budget"
          {...form.getInputProps("title")}
        />
        <NumberInput
          placeholder="Amount"
          label="Set budget amount"
          icon={<CurrencyRupee size={16} />}
          required
          {...form.getInputProps("amount")}
        />
        <TextInput
          label="Category"
          placeholder="Add a category for this budget"
          {...form.getInputProps("tag")}
        />
        <Textarea
          label="Comments"
          placeholder="Add additional comments"
          {...form.getInputProps("comments")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Save</Button>
        </Group>
      </form>
    </Box>
  );
}
export default AddBudget;
