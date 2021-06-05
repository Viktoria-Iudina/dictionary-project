import React, { useState } from "react";
import books from "./books.png";
import './App.css';
import axios from "axios";
import Results from './Results';
import Photos from "./Photos";

export default function App() {
  let [keyword, setKeyword] = useState("hello"); 
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "563492ad6f91700001000001fce9161f79ce404db68e11c647468a5c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { "Authorization" : `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="App">
        <div className="container">  
          <header>
          <img src={books} alt="books" className="img-fluid pt-5" />
          <div className="searchHint">
              <form onSubmit={handleSubmit}>
                <input onChange={handleKeywordChange} className="form-control" type="search" placeholder="Which word are you searching for?" autoFocus={true}></input>
              </form>
              <small className="hint p-3">Suggested words: sunset, wine, work</small>
            </div>
          </header>
  
          <main>
            <Results results={results} />
            <Photos photos={photos} />
          </main>
          <footer className="text-center pt-5 pb-5">
            <small>Coded by <a href="https://github.com/Viktoria-Iudina/dictionary-project">Viktoriia Iudina</a></small>
          </footer>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }

}