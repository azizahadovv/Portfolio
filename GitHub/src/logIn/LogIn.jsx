import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
function LogIn(props) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  function mySubmit(data1) {
    axios({
      url: "http://localhost:3030/users?Username=" + data1.UserName,
      method: "get",
    }).then((res) => {
      let dbUsers = res.data[0];
      console.log(res.data.Username);
      if (
        dbUsers.password === data1.password
      ) {
        localStorage.setItem("Token", JSON.stringify(dbUsers.id));
        navigate("/admin");
      } else {
        alert("Password or Username is incorrect!!!");
      }
    });
  }

  return (
    <div className="container">
      <div className=" card LogIn">
        <div className="card-heder text-center my-3">
          <p>
            <h3 style={{ fontFamily: "serif" }}>Log in</h3>
          </p>
        </div>
        <form onSubmit={handleSubmit(mySubmit)}>
          <input
            {...register("UserName")}
            className="form-control"
            type="text"
            placeholder=" user name.."
          />
          <input
            {...register("Password")}
            className="form-control my-3"
            type="text"
            placeholder=" password.."
          />
          <button className="btn btn-success btnEnd">Log In</button>
          <br />
          <span className="my-3 mx-3">
            <b>
              <i>If you are not registered</i>{" "}
              <Link to={"/signUp"}>Sign Up</Link>
            </b>
          </span>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
