import { BrowserRouter } from "react-router-dom";
import ControlsCard from "../components/cards/ControlsCard";
import DetailsCard from "../components/cards/DetailsCard";
import PlayerList from "../player/PlayerList";
import Header from "./Header";
import { useState } from "react";
import { Player } from "../types/player";
import PlayerDetail from "../player/PlayerDetail";

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);

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
          <ControlsCard />
        </div>
        <PlayerList onSelectPlayer={handleSelectPlayer} />
      </div>
    </BrowserRouter>
  );
}

export default App;