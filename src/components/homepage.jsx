import React, { useState } from "react";
import s from "./homepage.module.css";
import { employeeArr } from "./employes";
import TimePicker from "react-time-picker";
import { useDispatch, useSelector } from "react-redux";
import { listCardData } from "../redux/Actions/action";

const HomePage = () => {
  const [value, onChange] = useState("10:00");
  const disptach = useDispatch();

  const cardValue = useSelector((state) => state?.cardReducer?.employee);
  console.log("cardValue in home page ===>", cardValue);

  const initialValues = {
    name: "",
    employee: "",
    date: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formValues);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit function");
    localStorage.setItem("formValues", JSON.stringify(formValues));
    disptach(listCardData(formValues));
  };

  return (
    <div>
      <div className={s.appointmentSection}>
        <h2 className="ms-5">Calender</h2>
        {/* <!--  Popup  --> */}
        <div className="modal" id="myModal2" data-bs-backdrop="static">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Employeee PopUp</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center">
                    <label>Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Type Name"
                      className={`form-control ${s.employeeName}`}
                      onChange={handleChange}
                      value={formValues.name}
                    />
                  </div>

                  <br />
                  <div className="d-flex align-items-center">
                    <label>Employee</label>
                    <select
                      name="employee"
                      aria-label="Default select example"
                      className={`form-select ${s.employee}`}
                      onChange={handleChange}
                      value={formValues.employee}
                    >
                      <option value="...">...</option>
                      {employeeArr.map((ele, ind) => {
                        return <option key={ind}>{ele?.name}</option>;
                      })}
                    </select>
                  </div>
                  <br />
                  <div className="d-flex align-items-center">
                    <label>Date</label>
                    <input
                      type="date"
                      className={`form-control ${s.selectDate}`}
                      name="date"
                      onChange={handleChange}
                      value={formValues.date}
                    />
                  </div>
                  <br />
                  <div className="d-flex">
                    <label>Time</label>
                    <TimePicker
                      onChange={onChange}
                      value={value}
                      className={`  ${s.timePicker}`}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button className={s.addBlockTimeButton}> - Add Block Time</button>
        <button className={s.appointmentButton}>
          <a data-bs-toggle="modal" data-bs-target="#myModal2">
            + New Appointment
          </a>
        </button>
      </div>
      <div className="table-responsive">
        <div className={`mt-3 d-flex  justify-content-between ${s.swe}`}>
          <div className="dropdown">
            <button
              type="button"
              className={`btn btn-light dropdown-toggle ${s.scw}`}
              data-bs-toggle="dropdown"
            >
              All Employee
            </button>
            <ul className="dropdown-menu">
              {employeeArr.map((ele, index) => {
                return (
                  <li className="dropdown-item" key={index}>
                    {ele.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Today
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Link 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Link 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
          <div>
            <input type="date" className={s.datepicker} />
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <table className="table mb-4 table-bordered">
        <thead>
            <tr>
              <th scope="col">Duration</th>
              {employeeArr.map((ele, index) => {
                return (
                  <th key={index}>
                    <img
                      src={ele?.Image}
                      className={`rounded-circle ${s.avatarSize}`}
                      alt="Avatar"
                    />
                    <p className="fw-normal">{ele?.name}</p>
                  </th>
                );
               })}
            </tr>
          </thead>
          <tbody>
            {employeeArr.map((ele, ind) => {
              return (
                <tr className={s.mw1} key={ind}>{ele.startTime}
                    <td className={s.carddd}>
                      <div class="card" style={{ width: "12rem" }}>
                        <div class="card-body">
                            <p className="text-primary">{cardValue.date}</p>
                          <h5 class="card-title">{cardValue.employee}</h5>
                          <p class="card-subtitle mb-2 text-muted">
                            {ele.description}
                          </p>
                          <h6 class="card-text">{ele.aed}</h6>
                          <p>{ele.appointment}</p>
                        </div>
                      </div>
                    </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;