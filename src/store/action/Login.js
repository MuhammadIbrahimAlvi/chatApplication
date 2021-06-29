const setLogin = (status, history) => {
  return (dispatch) =>
    dispatch({
      type: "SET_LOGIN",
      payload: status,
    });
  history.push("/");
  // console.log("dispatch login");
};
export default setLogin;
