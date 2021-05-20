import books from "./books.png";
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  function search() {
    alert("searching");
  }
  return (
    <div className="App">
      <div className="container">  
        <header>
        <img src={books} alt="books" className="img-fluid pt-5" />
          <div className="search">
            <form onSubmit={search}>
              <input className="form-control form-control-lg shadow" type="search" autoFocus={true} placeholder="Search a word"></input>
            </form>
            <button className="btn btn-light shadow"> 🔎 </button>
          </div>
        </header>

        <main>
          <Dictionary />
        </main>
        <footer className="text-center pt-5 pb-5">
          <small>Coded by Viktoriia Iudina</small>
        </footer>
      </div>
    </div>
  );
}