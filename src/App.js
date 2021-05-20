import books from "./books.png";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header>  
        <img src={books} alt="books" className="img-fluid pt-5" />
        <div className="search">
          <input className="form-control form-control-lg shadow" type="text" placeholder="Search a word"></input>
          <a href="#" className="btn btn-light shadow">🔎</a>
        </div>
      </header>
    </div>
  );
}