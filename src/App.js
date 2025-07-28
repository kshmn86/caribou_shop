import './App.css';
import {useEffect} from "react";
import Header from "./Components/Header/Header";
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()
  }, []);

  const onClose =() => {
    tg.close()
  }

  return (
    <div className="App">
        <Header/>
        <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
