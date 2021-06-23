const initialState = {
  users: [],
  current_user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Set_User_By_Auth":
      return { ...state, current_user: action.payload };
    case "SETFIREBASEUSERS":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;

// index.js
// import Google_auth_Reducer from "./Google_auth_Reducer";
// import { combineReducers } from "redux";
// export const rootReducer = combineReducers({
//   Google_auth_Reducer,
// });

// Register_User_Reducer
// const initialState = {
//   users: [],
//   current_user: {},
// };

// const Register_User_Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SETFIREBASEUSERS":
//       return { ...state, current_user: action.payload };
//     default:
//       return state;
//   }
// };
