import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ReactGA from 'react-ga';


ReactGA.initialize('G-CEJKBYXCSB');


function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
