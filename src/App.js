import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Main from "./components/MainContent/Main";

function App() {
  const [cart, setCart] = React.useState([]);
  const [totalPrice , setTotalPrice] = React.useState(0);
  
  React.useEffect(() => {
     setTotalPrice(cart.reduce((acc, value) => {
      const result = acc += value.price * value.amount;
      return result;
    }, 0))
  }, [cart])

  return (
    <div className="App">
      <Header totalPrice={totalPrice} />
      <Main setCart={setCart} cart={cart} totalPrice={totalPrice} />
    </div>
  );
}

export default App;
