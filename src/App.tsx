import React from "react";
import addNotification from "react-push-notification";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const clickToNotify = (str: string) => {
    addNotification({
      title: "hello world",
      subtitle: "subtitle",
      theme: "darkblue",
      message: "hello world " + str,
      duration: 4000,
      icon: logo,
      native: true,
    });
  };
  return (
    <>
      <h2 style={{textAlign: "center"}}>Push Notification DEMO</h2>
      <div className="container">
        { (Array.from(Array(6).keys())).map(i=> {
          return <button className="item" onClick={() => clickToNotify(i.toString())}>
          Notify {i}
        </button>
        
        })}
      </div>
    </>
  );
};

export default App;
