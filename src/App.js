import './App.css';
import Header from './components/Header/Header';
import Main from "./components/MainContent/Main";
import data from "./data.json";

console.log(data);

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
