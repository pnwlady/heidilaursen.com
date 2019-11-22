import * as React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import tools from './img/tools.jpg'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="background-img">

      </div>
        {/* <img
          className="background-img"
          src={tools}
          alt="tools"
        /> */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
