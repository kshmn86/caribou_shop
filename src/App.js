import {useEffect} from "react";
import Header from "./Components/Header/Header";
import './App.css';

function App() {

  useEffect(() => {
    tg.ready()
  }, []);


  return (
    <div className="App">
        <Header/>
        <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
