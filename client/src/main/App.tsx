import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerList from '../player/PlayerList';
import './App.css';
import Header from './Header';
import PlayerDetail from '../player/PlayerDetail';
import DetailsCard from '../components/cards/DetailsCard';
import ControlsCard from '../components/cards/ControlsCard';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        < Header subtitle="Welcome" />
        <div className="row w-100">
          <DetailsCard />
          <ControlsCard />
        </div>
        <PlayerList/>
        <Routes>
          <Route path="/" element={<PlayerList />}></Route>
          <Route path="/player/:id" element={<PlayerDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
