import './App.css';
import Header from './components/Header/Header';
import Main from "./components/MainContent/Main";

function App() {

  const handleClick = (e) => {
    console.log(e.target);
    console.log(e.type);
  }

  return (
    <div className="App">
      <Header />
      <Main />
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
