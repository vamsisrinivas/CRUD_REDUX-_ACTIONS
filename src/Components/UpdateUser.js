import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FunctionUpdateUser, fetchUserobj } from "../Redux/Action";

const UpdateUser = () => {
  const [data, setData] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    role: "staff",
  });

  const { id, name, email, phone, role } = data;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const userobj = useSelector((state) => state.user.userobj);

  useEffect(() => {
    dispatch(fetchUserobj(code));
  }, []);

  useEffect(() => {
    if (userobj) {
      setData({
        id: userobj.id,
        name: userobj.name,
        email: userobj.email,
        phone: userobj.phone,
        role: userobj.role,
      });
    }
  }, [userobj]);
  
  

  
  

  const changehandler = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submithandler = (e) => {
    e.preventDefault();
    const userobj={id,name,email,phone,role}

    dispatch(FunctionUpdateUser(userobj,id));
    navigate("/users");
    // console.log(data);
    // setData({
    //   id: "",
    //   name: "",
    //   email: "",
    //   phone: "",
    //   role: "staff",
    // });
  };

  return (
    <div>
      <form onSubmit={submithandler}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "center" }}>
            Update Data
          </div>
          <div className="card-body m-5" style={{ textAlign: "left" }}>
            <div className="row m-2">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>ID</label>
                  <input
                    className="form-control"
                    placeholder="Name"
                    name="id"
                    value={id||""}
                    onChange={changehandler}
                    disabled="disabled"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={name||""}
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
                    value={email||""}
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
                    value={phone||""}
                    onChange={changehandler}
                  ></input>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      className="form-control"
                      value={role||""}
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

          <button
            className="btn btn-primary"
            type="submit"
            style={{ width: "100px", margin: "auto" }}
          >
            Update
          </button>
          <br />
          <Link
            className="btn btn-success"
            style={{ width: "100px", margin: "auto" }}
            to={"/users"}
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
