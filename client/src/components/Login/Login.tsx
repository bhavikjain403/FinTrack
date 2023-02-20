import Axios from "axios";
// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "tabler-icons-react";
import Typography from "@mui/material/Typography";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "tabler-icons-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { setIsLoggedIn, setSingleUser } from "../../Redux/userSlice";
import { RootState } from "../../Redux/store";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { toast } from "react-hot-toast";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorText, setErrorText] = useState("");

  // Check loginStatus and if logged in redirect to user page
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const username = useSelector((state: RootState) => state.user.user.username);
  useEffect(() => {
    isLoggedIn && navigate(`/dashboard/${username}`);
  }, [isLoggedIn, navigate, username]);

  // Handle checkin form submit and if login succesful redirect to user page
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    toast("Logging in...", { icon: "ℹ️" });
    await Axios.post(
      "https://hack-niche-outliers.vercel.app/api/v1/auth/login",
      {
        email: data.get("email"),
        password: data.get("password"),
      }
    )
      .then((res) => {
        if (res.data.loginToken) {
          localStorage.setItem("currentToken", res.data.loginToken);
          localStorage.setItem("userId", res.data.user._id);
          dispatch(setSingleUser(res.data.user));
          dispatch(setIsLoggedIn());
          toast.success("Logged in!");
        }
      })
      .catch((error) => setErrorText(error.response.data.message));
  };

  return (
    <Grid className="lead-capture-form mt-5" item xs={12} sm={8} md={5} elevation={6} square style={{ background:"transparent", color:"#0d6efd" }}>
      <Form onSubmit={handleSubmit}>
        <h5 style={{ textAlign:"center" }} className="mb-4"><strong>Sign In</strong></h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" id="email" name="email" required/>
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" id="password" name="password" required/>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Sign In
        </Button>
        <Link href="/signup" variant="body2">
          {"Don't have an account? Signup"}
        </Link>
      </Form>
    </Grid>
  );
}
