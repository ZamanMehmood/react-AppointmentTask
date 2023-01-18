 import { FORM_DATA } from "./actionType";

export const listCardData = () => async(dispatch) => {
  console.log("running =======>");

  let data = localStorage.getItem("formValues");
   const newData = JSON.parse(data)
   console.log("action file --->",newData)
   dispatch({
    type : FORM_DATA,
    payload: newData
   })
};