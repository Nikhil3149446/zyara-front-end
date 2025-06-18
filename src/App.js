import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Router from './Router';
function App() {

  return (
    <div className="App bg-gray-100 w-full flex flex-col">
      <Header/>
      <Router/>
      
    </div>
  );
}

export default App;
