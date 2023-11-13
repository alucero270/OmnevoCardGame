import { BrowserRouter } from "react-router-dom";
import ControlsCard from "../components/cards/ControlsCard";
import DetailsCard from "../components/cards/DetailsCard";
import PlayerList from "../player/PlayerList";
import { useState } from "react";
import { Player } from "../types/player";
import { useUpdatePlayer } from "../hooks/PlayersHooks";


function App() {
  // const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const updatePlayerMutation = useUpdatePlayer(selectedPlayer);

  const handleSubmit = () => {
    if (selectedPlayer) {
      updatePlayerMutation.mutate(selectedPlayer.id);
    }
  };
  const handleSelectPlayer = (player: Player) => {
    setSelectedPlayer(player);
  };


  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortOrderChange = (newSortOrder: string) => {
    setSortOrder(newSortOrder);
  };

  return (
    <BrowserRouter>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-sm-8 ">
            <div className="card h-100 w-100 align-items-center">
              <DetailsCard selectedPlayer={selectedPlayer} />
            </div>
          </div>
          <ControlsCard
            onSubmit={handleSubmit}
            onSortAscending={() => handleSortOrderChange('asc')}
            onSortDescending={() => handleSortOrderChange('desc')}
            player={selectedPlayer}
          />

        </div>
        <PlayerList onSelectPlayer={handleSelectPlayer} sortOrder={sortOrder} />
      </div>
    </BrowserRouter>
  );
}

export default App;