import { BrowserRouter } from "react-router-dom";
import ControlsCard from "../components/cards/ControlsCard";
import DetailsCard from "../components/cards/DetailsCard";
import PlayerList from "../player/PlayerList";
import Header from "./Header";
import { useState } from "react";
import { Player } from "../types/player";
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

  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Welcome" />
        <div className="row w-100">
          <div className="col-8">
          <div className="card text-start mb-3 h-100">
      <h3 className="card-header">{selectedPlayerId || 'N/A'}</h3>
      
            <DetailsCard playerId={selectedPlayerId !== null ? selectedPlayerId : 0} />
    </div>

          </div>
          <ControlsCard onSubmit={handleSubmit} />
        </div>
        <PlayerList onSelectPlayer={handleSelectPlayer} />
      </div>
    </BrowserRouter>
  );
}

export default App;