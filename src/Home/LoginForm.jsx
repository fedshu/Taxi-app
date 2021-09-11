import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authenticate } from "../actions";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log("data", data);
    dispatch(authenticate(email, password));
  };

  return (
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
      <button type="submit">Submit</button>
    </form>
  );
};
// authenticate = (event) => {
//   event.preventDefault();
//   const { email, password } = event.target;
//   this.props.authenticate(email.value, password.value);
// };
