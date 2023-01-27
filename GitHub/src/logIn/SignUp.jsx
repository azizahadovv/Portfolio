import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp(props) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function mySubmit(data) {
    if (data.passwort == data.repeadPasswort) {
      delete data.repeadPasswort;
      axios({
        url: "http://localhost:3030/users",
        method: "post",
        data,
      }).then((res) => {
       navigate("/log-in")
      
       reset({
          name: "",
          Username: "",
          Email: "",
          passwort: "",
          repeadPasswort: "",
        });
      });
    } else {
      alert("the password and the duplicate password are not the same");
    }
  }

  return (
    <div className="container">
      <div className="card card1">
        <div className="card-heder">
          <h1 className="text-center my-2">
            <b>Sign Up</b> <hr />
          </h1>
        </div>
        <form onSubmit={handleSubmit(mySubmit)}>
          <input
            {...register("name")}
            className="form-control my-2 "
            type="text"
            placeholder="Name"
          />
          <input
            {...register("Username")}
            className="form-control my-2 "
            type="text"
            placeholder="User Name"
          />
          <input
            {...register("PhoneNumber")}
            className="form-control my-2 "
            type="number"
            placeholder="Phone Number"
          />
          <input
            {...register("Email")}
            className="form-control my-2 "
            type="text"
            placeholder="Email"
          />
          <input
            {...register("passwort")}
            className="form-control my-2 "
            type="text"
            placeholder="passwort"
          />
          <input
            {...register("repeadPasswort")}
            className="form-control my-2 "
            type="text"
            placeholder="Repead Passwort"
          />
          <button className="btn btn-success mt-4  btnEnd1">save info</button>
          <span className="mx-3 my-2">
            <b>
              <i>IF YOU ARE REGISTERED</i> <Link to={"/signUp"}>log-in</Link>
            </b>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
