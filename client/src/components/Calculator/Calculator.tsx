import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleUser } from "../../Redux/userSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { RootState } from "../../Redux/store";

const defaultFormFields = {
  principal: "",
  rate: "",
  months: "",
};

const Calculator = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [emi, setEmi] = useState("");
  const { principal, rate, months } = formFields;

  /* HANDLE FORM SUBMISSION */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { principal, rate, months } = formFields;
    console.log(formFields);
    var emi_val =
      ((principal * rate) / 100) *
      (Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1));
    console.log("EMI", emi_val);
    setEmi(emi_val);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(formFields);
  };

  const props = { handleChange, handleSubmit, principal, rate, months, emi };

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  return (
    <>
      <div className="general-layout">
        <Sidebar />
        <CalculatorInner {...props} />
      </div>
    </>
  );
};

function CalculatorInner({
  handleSubmit,
  handleChange,
  principal,
  rate,
  months,
  emi,
}) {
  const midScreen = useMediaQuery("(min-width: 1300px)");
  const largeScreen = useMediaQuery("(min-width: 1750px)");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state: RootState) => state.user.username)

  const addExpense = async (amount:any) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("currentToken");
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date();
    const value = {
      name: "EMI payment for " + months[date.getMonth()],
      amount,
      date,
      tag:"EMI"
    };
    console.log(value);
    toast("Adding Expense...", { icon: "ℹ️" });
    try {
      await axios
        .post(
          `https://hack-niche-outliers.vercel.app/api/v1/expense/${userId}`,
          value
        )
        .then((res) => console.log(res));
      await fetch(
        `https://hack-niche-outliers.vercel.app/api/v1/users/${userId}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast.success("Expense Added!");
          dispatch(setSingleUser(data));
          navigate("/expense/"+userName)
          console.log(data);
        });
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <>
      <Container
        fluid
        ml={largeScreen ? 800 : midScreen ? 600 : 400}
        mt={largeScreen ? 60 : 20}>
        <Paper w={100} radius="md" p={largeScreen ? 150 : 150} shadow="lg">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Principal: </Form.Label>
              <Form.Control
                type="number"
                onChange={handleChange}
                name="principal"
                value={principal}
              />
              {/* <input onChange={handleChange} name="principal" value={principal} /> */}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rate of Interest(in%): </Form.Label>
              <Form.Control
                type="number"
                onChange={handleChange}
                name="rate"
                value={rate}
              />
              {/* <input onChange={handleChange} name="rate" value={rate} /> */}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Num of Monthly Installments: </Form.Label>
              <Form.Control
                type="number"
                size="10"
                onChange={handleChange}
                name="months"
                value={months}
              />
              {/* <input onChange={handleChange} name="months" value={months} /> */}
            </Form.Group>
            <div className="d-flex">
              <Button type="submit">Calculate EMI for Loan</Button>
              {emi && (
                <div className="ml-3">
                  <Button
                    type="submit"
                    onClick={() => addExpense(Math.round(emi * 100) / 100)}>
                    Add EMI to expenses
                  </Button>
                </div>
              )}
            </div>
          </Form>
          <div className="mt-5" style={{ fontSize: "20px" }}>
            {" "}
            <span>
              {emi ? (
                <h1>Calculated EMI: {Math.round(emi * 100) / 100}</h1>
              ) : (
                <></>
              )}
            </span>
          </div>
        </Paper>
      </Container>
    </>
  );
}

export default Calculator;
