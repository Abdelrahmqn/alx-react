import Notifications from "../Notifications/Notifications.js"
import Login from "../Login/Login.js"
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"


import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
      <Notifications />
      <Header />
      <Login />
      <Footer />
      </React.StrictMode>
    </div>
  );
}

export default App;
