import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import UserListing from "./Components/UserListing";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/Store";


function App() {
  return (

    <Provider store={Store}>
    <div className="App">
    
      <BrowserRouter>
      <div className="header">
      <Link className="link" to={"/"}>Home</Link>
      <Link className="link"  to={"/users"}>Users</Link>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserListing />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit/:code" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position" position="bottom-center"></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
