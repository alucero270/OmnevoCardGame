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
    setSelectedPlayerId(player.Id);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Welcome" />
        <div className="row w-100">
          {selectedPlayerId && <DetailsCard playerId={selectedPlayerId} />}
          <PlayerDetail />
          <ControlsCard onSubmit={handleSubmit} />
        </div>
        <PlayerList onSelectPlayer={handleSelectPlayer} />
      </div>
    </BrowserRouter>
  );
}

export default App;