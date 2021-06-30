import React, { useEffect} from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./UsersList.style";
import AvatarIcon from "../../atoms/AvatarIcon/AvatarIcon";
import Time from "../../atoms/Time/Time";
import "../../../App.css";
import { useDispatch, useSelector } from "react-redux";
import get_users from "../../../store/action/auth.actions";
import Chat_user from "../../../store/action/Chat_user";
import { useHistory } from "react-router-dom";

const UsersList = ({ classes, history }) => {
  
 const h = useHistory();

  const users_data = useSelector((state) => state.users);
  const currentUserData = useSelector((state) => state.current_user);
  const res = users_data.filter(
    (item) => !currentUserData.user_id.includes(item.user_id)
  );
  const dispatch = useDispatch();
  //   Get All users
  useEffect(() => {
    // console.log("use effect");
    dispatch(get_users());
  }, []);

  //   ForChats
  // console.log(users_data);
  return (
    <>
      <div className={classes.UsersListContainer}>
        {res.map((user) => (
          <div
            className={classes.UsersList}
            key={user.id}
            onClick={() => dispatch(Chat_user(user, h))}
            
          >
            <div className={classes.UserCard}>
              <AvatarIcon url={user.image_url} />
              <h5 className={classes.userName}>{user.name}</h5>
            </div>
            <div>
              <Time />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default withStyles(styles)(UsersList);
