import React from "react";
import addNotification from "react-push-notification";
import logo from './logo.svg';


const App = () => {
  const clickToNotify = () => {
    addNotification({
      title: 'hello world',
      subtitle: 'subtitle',
      theme: 'darkblue',
      message: 'hello world',
      duration: 4000,
      icon: logo,
      native: true
    })
  }
  return (
    <div>
      <button onClick={clickToNotify} style={{ margin: '100px' }}>
        Notify
      </button>
    </div>
  )
}

export default App;


