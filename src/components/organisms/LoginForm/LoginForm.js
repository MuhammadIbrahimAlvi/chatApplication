import { withStyles } from "@material-ui/core/styles";
import Button from "../../atoms/Button/Button";
import TextField from "../../atoms/TextField/TextField";
import Heading from "../../atoms/Heading/Heading";
import { styles } from "./LoginForm.style";
import GoogleLogo from "../../../images/google-logo.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Google_auth } from "../../../store/action/Google_auth";
import { withRouter } from "react-router-dom";
const LoginForm = ({ classes, history }) => {
  const validationSchema = yup.object({
    userName: yup
      .string("Enter username")
      .required("username is required")
      .matches(/^[a-zA-Z]+$/, "Enter a valid username"),
    password: yup
      .string("Enter your password")
      .required("password is required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const dispatch = useDispatch();
  // console.log(history);
  return (
    <div className={classes.LoginForm}>
      <Heading heading="Login" />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          placeholder="Enter Username"
          inputType="text"
          name="userName"
          value={formik.values.userName}
          error={Boolean(formik.errors.userName)}
          helperText={formik.errors.userName}
        >
          Username
        </TextField>
        <TextField
          placeholder="Enter Password"
          inputType="password"
          name="password"
          value={formik.values.password}
          error={Boolean(formik.errors.password)}
          helperText={formik.errors.password}
        >
          Password
        </TextField>
        <Button type="submit">Sign in</Button>
      </form>
      <div className={classes.AuthBtn}
        onClick={() => dispatch(Google_auth(history))}
        // onClick={() => history.push("/userpanel")}
      >
        <img src={GoogleLogo} className={classes.GoogleLogo} alt="" />Sign in
        with Google
      </div>

      <p>
        Don't have an account
        <NavLink to="/RegisterPage"> Register Now!</NavLink>
      </p>
    </div>
  );
};

export default withStyles(styles)(withRouter(LoginForm));
