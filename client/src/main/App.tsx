import PlayerList from '../player/PlayerList';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="container">
      < Header subtitle="Welcome"/>
      <div className="">
      {/* < DetailsCard /> */}
      {/* < ControlsCard /> */}
      </div>
      <div className="">
        < PlayerList />

      </div>

    </div>
  );
}

export default App;
