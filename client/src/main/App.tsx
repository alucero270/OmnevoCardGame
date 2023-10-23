import PlayerList from '../player/PlayerList';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="container">
      < Header subtitle="Welcome"/>
      < PlayerList />
    </div>
  );
}

export default App;
