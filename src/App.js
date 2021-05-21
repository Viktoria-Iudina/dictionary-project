import React, { useState } from "react";
import books from "./books.png";
import './App.css';
//import Dictionary from './Dictionary';

export default function App() {
  let [keyword, setKeyword] = useState(""); 

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">  
        <header>
        <img src={books} alt="books" className="img-fluid pt-5" />
          <div className="search">
            <form onSubmit={search}>
              <input onChange={handleKeywordChange} className="form-control shadow" type="search" placeholder="Search a word" autoFocus={true}></input>
            </form>
            <button className="btn btn-light shadow"> 🔎  </button>
          </div>
        </header>

        <main>
        </main>
        <footer className="text-center pt-5 pb-5">
          <small>Coded by Viktoriia Iudina</small>
        </footer>
      </div>
    </div>
  );
}