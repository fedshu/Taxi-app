import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authenticate } from "../actions";
import { Paper, Button, TextField, Grid, Box, Typography } from "@mui/material";

export const LoginForm = ({ useDispatchHook = useDispatch }) => {
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(authenticate(email, password));
  };

  return (
    <Grid className="form" container justifyContent="center" alignItems="center">
      <Box>
        <Paper elevation={16}>
          <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" gutterBottom component="div">
              Log in
            </Typography>
            <Grid container direction="column">
              <TextField
                {...register("email", { required: true })}
                id="email"
                type="email"
                name="email"
                size="28"
                label="Email"
                variant="standard"
                margin="normal"
                className="form__field"
              />
              <TextField
                {...register("password", { required: true })}
                id="password"
                type="password"
                name="password"
                size="28"
                label="Password"
                variant="standard"
                margin="normal"
                className="form__field"
              />
            </Grid>
            <div className="form__button">
              <Button type="submit" variant="outlined" size="medium">
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </Box>
    </Grid>
  );
};
