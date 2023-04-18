import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Main from "./components/MainContent/Main";
import data from "./data.json";

console.log(data);

function App() {
  const [cart, setCart] = React.useState([]);
  console.log("cart: ", cart);

  return (
    <div className="App">
      <Header />
      <Main setCart={setCart} cart={cart}/>
    </div>
  );
}

export default App;
