import './styles/app.css';

import Player from './components/Player';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <h1>Worklify</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
