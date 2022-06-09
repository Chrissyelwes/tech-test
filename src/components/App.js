import React from "react";
import "../styles/app.css";
import Search from "../components/Search";

const App = () => {
  return (
    <div className="app">
        <img className="logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="NASA logo"
         />
      <Search />
    </div>
  );
}

export default App;