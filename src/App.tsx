import './App.css';
import GameBoard from './components/GameBoard';

// Game Board Component
//   - randomly render cells with pairs of numbers
//   - store the cells state (open/closed, value)
//   - stop the game after all the cells have been flipped
//
//   Cell component
//     -

function App() {
  return (
    <>
      <h1>Memory game</h1>

      <GameBoard />
    </>
  );
}

export default App;
