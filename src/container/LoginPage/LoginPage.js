import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import RegisterForm from "../../components/organisms/RegisterForm/RegisterForm";
import { styles } from "./LoginPage.style";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const LoginPage = ({ classes }) => {
  return (
    <div className={classes.LoginPage}>
      <div className={classes.FormLeft}></div>
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route exact path="/RegisterPage">
          <RegisterForm />
        </Route>
      </Switch>
    </div>
  );
};
export default withStyles(styles)(LoginPage);
