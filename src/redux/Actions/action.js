//  import { FORM_DATA } from "./actionType";

// export const listCardData = () => async(dispatch) => {
//   console.log("action function running =======>");

//   let data = localStorage.getItem("formValues");
//    const newData = JSON.parse(data)
//    console.log("action file --->",newData)
//    dispatch({
//     type : FORM_DATA,
//     payload: newData
//    })
// };

import { FORM_DATA } from "./actionType";

export const listCardData = ({formValues}) => async (dispatch) => {
  console.log("form", formValues);
  console.log("action function running =======>");

  const a = [...formValues];
  let data = localStorage.getItem("formValues");
  const newData = JSON.parse(data);
  a.push(newData);
  localStorage.setItem("formValues", JSON.stringify(a));
  dispatch({
    type: FORM_DATA,
    payload: a,
  });
};