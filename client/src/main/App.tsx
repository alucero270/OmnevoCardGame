import { BrowserRouter } from "react-router-dom";
import ControlsCard from "../components/cards/ControlsCard";
import DetailsCard from "../components/cards/DetailsCard";
import PlayerList from "../player/PlayerList";
import Header from "./Header";
import { useState } from "react";
import { Player } from "../types/player";
import PlayerDetail from "../player/PlayerDetail";
import axios from "axios";

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);

  const handleSubmit = () => {
    if (selectedPlayerId) {
      axios.post('https://localhost:4000', selectedPlayerId)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  };

  const handleSelectPlayer = (player: Player) => {
    setSelectedPlayerId(player.id);
  };

  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortOrderChange = (newSortOrder: string) => {
    setSortOrder(newSortOrder);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Welcome" />
        <div className="row w-100">
          <div className="col-8 ">
            <div className="card  h-100">
              <DetailsCard playerId={selectedPlayerId !== null ? selectedPlayerId : 0} />
            </div>
          </div>
          <ControlsCard
            onSubmit={handleSubmit}
            onSortAscending={() => handleSortOrderChange('asc')}
            onSortDescending={() => handleSortOrderChange('desc')}
          />
        </div>
        <PlayerList onSelectPlayer={handleSelectPlayer} sortOrder={sortOrder} />
      </div>
    </BrowserRouter>
  );
}

export default App;