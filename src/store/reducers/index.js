const initialState = {
  users: [],
  current_user: {},
  chat_user: {},
  chats: [],
  accountCredit: [],
  isLogin: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // for logging in
    case "Set_User_By_Auth":
      return { ...state, current_user: action.payload, isLogin: true };

    // all loggedin users are saved into firebase
    case "SETFIREBASEUSERS":
      return {
        ...state,
        users: action.payload,
      };

    // chats with users are saved here
    case "CHATUSERDATA":
      return {
        ...state,
        chat_user: action.payload,
      };

    // buying coin will set this amount into local redux state
    case "Buy Coins":
      return {
        ...state,
        accountCredit: action.payload,
      };

    // for logging out from the account
    case "SET_LOGIN":
      return {
        users: [],
        current_user: {},
        chat_user: {},
        chats: [],
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
