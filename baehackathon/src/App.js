import './App.css';
import ScoreCard from './Components/ScoreCard';
import NavBar from './Components/navbar';
import Carousel from "./Components/carousel";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ScoreCard/>
        <Carousel/>  

    </div>
  );
}

export default App;
