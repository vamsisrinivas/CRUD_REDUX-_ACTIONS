import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const AddUser = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "staff",
  });

  const { name, email, phone, role } = data;

  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(FunctionAddUser(data))
    navigate("/users")
    // console.log(data);
    setData({
      name: "",
      email: "",
      phone: "",
      role: "staff",
    });
  };
  const dispatch=useDispatch()
  const navigate=useNavigate()

  return (
    <div>
      <form onSubmit={submithandler}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "center" }}>
            Create Data
          </div>
            <div className="card-body m-5" style={{ textAlign: "left" }}>
              <div className="row m-2">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={changehandler}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={changehandler}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      className="form-control"
                      placeholder="Phone"
                      name="phone"
                      value={phone}
                      onChange={changehandler}
                    ></input>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Role</label>
                      <select
                        className="form-control"
                        value={role}
                        name="role"
                        onChange={changehandler}
                      >
                        <option value="">selectOne</option>
                        <option value="admin">Admin</option>
                        <option value="staff">Staff</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
            <button className="btn btn-primary" type="submit" style={{width:"100px",margin:"auto"}}>Submit</button>
            <br/>
            <Link className="btn btn-success" style={{width:"100px",margin:"auto"}} to={"/users"}>
              Back
            </Link>
       
        </div>
      </form>
    </div>
  );
};

export default AddUser;
