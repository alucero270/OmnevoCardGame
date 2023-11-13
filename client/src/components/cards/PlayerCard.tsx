import { useState } from "react";
import { Player } from "../../types/player";

type PlayerCardProps = {
  player: Player;
  onSelectPlayer: (player: Player) => void;
};

const PlayerCard = ({ player, onSelectPlayer }: PlayerCardProps) => {
  const [playerState, setPlayerState] = useState<Player | null>(null);
  const handleSelect = () => {
    setPlayerState(player);
    onSelectPlayer(player);
   };
   

  return (
    <div className="col-md-4 mb-3 align-self-center text-nowrap">
      <div className="card h-100 w-100 text-truncate">
        <h5 className="card-header text-center mb-2">
          {player.realName}
        </h5>
        <div className="card-body ">
          <div className="col ">
            <h6 >Player Name:</h6>
            <p className="text-truncate">{player.playerName}</p>
            <h6 >Asset:</h6>
            <p className="text-truncate">{player.asset}</p>
          </div>
          <div className="card-row text-center">
            <button className="btn btn-primary w-100" onClick={handleSelect}>
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;