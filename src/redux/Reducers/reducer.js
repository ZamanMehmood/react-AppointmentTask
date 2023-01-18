import { FORM_DATA } from "../Actions/actionType";

const initialState = {
  employee: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_DATA: {
      console.log("reducer file ===>", action.payload);
      return {
        ...state,
        employee: action.payload,
      };
    }
    default:
      return state;
  }
};
export default cardReducer;