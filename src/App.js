import sticker from "./sticker.png";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header>
        <img src={sticker} alt="sticker" className="img-fluid" />
      </header>
      Hello
    </div>
  );
}