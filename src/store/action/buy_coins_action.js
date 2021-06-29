const update_account_details = (obj) => {
  return (dispatch) => {
    dispatch({
      type: "Update Account Details",
      payload: obj,
    });
  };
};
