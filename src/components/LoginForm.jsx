import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authenticate } from "../actions";
import { Paper, Button } from "@mui/material";

export const LoginForm = ({ useDispatchHook = useDispatch }) => {
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log("data", data);
    dispatch(authenticate(email, password));
  };

  return (
    <Paper elevation={16}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <input
          {...register("email", { required: true })}
          id="email"
          type="email"
          name="email"
          size="28"
        />
        <label htmlFor="password">Password:</label>
        <input
          {...register("password", { required: true })}
          id="password"
          type="password"
          name="password"
          size="28"
        />
        <Button type="submit" variant="contained" size="medium">
          Log in
        </Button>
      </form>
    </Paper>
  );
};
// authenticate = (event) => {
//   event.preventDefault();
//   const { email, password } = event.target;
//   this.props.authenticate(email.value, password.value);
// };
