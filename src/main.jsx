import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../component/Login/Login.jsx";
import Errorpage from "../component/Errorpage/Errorpage.jsx";
import Home from "../component/Home/Home.jsx"
import Lodingpage from "../component/Lodingpage/Lodingpage.jsx"
import Contact from "../component/Contact/Contact.jsx";
import Singup from "../component/Singup/Singup.jsx";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Home />,
    errorElement: <Errorpage />
  },
  {
    path: "Login",
    element: <Login />
  },
  {
    path: "Loding",
    element: <Lodingpage />
  },
  {
    path: "Contact",
    element: <Contact />
  },
  {
    path: "Signup",
    element: <Singup />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
