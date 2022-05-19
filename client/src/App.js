import AllAuthor from "./components/AllAuthor";
import EditAuthor from "./components/EditAuthor";
import NewAuthor from "./components/NewAuthor";
import Error from "./components/Error";
import {BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element = {<AllAuthor/>} />
        <Route path="/edit/:id" element = {<EditAuthor/>} />
        <Route path="/new" element = {<NewAuthor/>} />
        <Route path="/error" element = {<Error/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
