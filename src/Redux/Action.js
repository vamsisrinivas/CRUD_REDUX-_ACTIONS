import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";
import { toast } from "react-toastify";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};
export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};
export const getUserList = (userobj) => {
  return {
    type: GET_USER_LIST,
    payload: userobj,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const UpdateUser = () => {
  return {
    type: UPDATE_USER,
  };
};

export const getUserObj = (data) => {
  return {
    type: GET_USER_OBJ,
    payload: data,
  };
};

export const fetchUserList = (dispatch) => {
  return (dispatch) => {
    dispatch(makeRequest());
    setTimeout(() => {
      axios
        .get("http://localhost:8008/users")
        .then((res) => {
          const userList = res.data;
          dispatch(getUserList(userList));
        })
        .catch((err) => {
          dispatch(failRequest(err.message));
        });
    }, 2000);
  };
};

export const RemoveUser = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    //    setTimeout(() => {
    axios
      .delete("http://localhost:8008/users/" + code)
      .then((res) => {
        // const userList=res.data;
        // dispatch(getUsederList(userList))
        dispatch(deleteUser());
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    //    }, 2000);
  };
};

export const FunctionAddUser = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    //    setTimeout(() => {
    axios
      .post("http://localhost:8008/users/", data)
      .then((res) => {
        // const userList=res.data;
        // dispatch(getUsederList(userList))
        dispatch(addUser());
        toast.success("user Added Successfully");
      })
      .catch((err) => {
        dispatch(addUser(err.message));
      });
    //    }, 2000);
  };
};

export const FunctionUpdateUser = (data,code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    //    setTimeout(() => {
    axios
      .put("http://localhost:8008/users/"+code,data)
      .then((res) => {
        // const userList=res.data;
        // dispatch(getUsederList(userList))
        dispatch(UpdateUser());
        toast.success("user Updated Successfully");
      })
      .catch((err) => {
         
        dispatch(failRequest(err.message+"i don`t known the error"));
      });
    //    }, 2000);
  };
};

export const fetchUserobj = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    //    setTimeout(() => {
    axios.get('http://localhost:8008/users/'+code)
      .then((res) => {
        const userList = res.data;
        dispatch(getUserObj(userList));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    //    }, 2000);
  };
};
