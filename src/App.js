import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Database from './pages/Database';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Database/>
      </header>
    </div>
  );
}

export default App;
