import axios from "axios";
import { Box } from "@mui/material";
// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setSingleUser } from "../../Redux/userSlice";

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


export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    toast("Signing up...", { icon: "ℹ️" });
    await axios.post(
      "https://hack-niche-outliers.vercel.app/api/v1/users",
      {
        username: data.get("username"),
        email: data.get("email"),
        phone: data.get("phone"),
        password: data.get("password"),
      }
    ).then((res) => {
      axios.post(
        "https://hack-niche-outliers.vercel.app/api/v1/auth/login",
        {
          email: res.data.email,
          password: data.get("password"),
        }
      )
        .then((res) => {
          if (res.data.loginToken) {
            localStorage.setItem("currentToken", res.data.loginToken);
            localStorage.setItem("userId", res.data.user._id);
            dispatch(setSingleUser(res.data.user));
            dispatch(setIsLoggedIn());
            toast.success("Signed Up!");
            navigate(`/dashboard/${res.data.user.username}`);
          }
        })
        .catch((error) => console.log(error.response.data.message));
    });
  };

  return (
    <Grid className="lead-capture-form mt-4" item xs={12} sm={8} md={5} elevation={6} square style={{ background:"transparent", color:"#0d6efd" }}>
      <Form onSubmit={handleSubmit}>
        <h5 style={{ textAlign:"center" }} className="mb-4"><strong>Sign Up</strong></h5>
        <Form.Group className="mb-4">
          <Form.Control type="text" required id="username" name="username" placeholder="User Name"/>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="email" required id="email" name="email" placeholder="Email Address"/>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="text" required id="phone" name="phone" placeholder="Phone Number"/>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="password" required id="password" name="password" placeholder="Password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <Link href="/login" variant="body2">
          {"Already have an account? Login"}
        </Link>
      </Form>
    </Grid>


  );
}
