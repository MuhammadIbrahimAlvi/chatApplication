import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./SideBar.style";
import Logo from "../../atoms/Logo/Logo";
import NavigationItems from "../../molecules/NavigationItems/NavigationItems";
import Button from "../../atoms/Button/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import setLogin from "../../../store/action/Login";
import { NavLink, withRouter } from "react-router-dom";
const SideBar = ({ classes, history }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={classes.SideBar}>
        <div>
          <Logo />
          <NavigationItems />
        </div>

        <div>
          {/* <Button>Logout</Button> */}
          <p className={classes.NavLinks}>
            <a className={classes.Links} href="#">
              <ExitToAppIcon />
              <NavLink to="/">
                <span
                  className={classes.Name}
                  onClick={() => dispatch(setLogin(false, history))}
                >
                  Logout
                </span>
              </NavLink>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(withRouter(SideBar));
