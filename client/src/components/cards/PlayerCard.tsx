import { useState } from "react";
import { Player } from "../../types/player";
import DetailsCard from "./DetailsCard";

type PlayerCardProps = {
  player: Player;
  onSelectPlayer: (player: Player) => void;
};

const PlayerCard = ({ player, onSelectPlayer }: PlayerCardProps) => {
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);
  const handleSelect = () => {
    onSelectPlayer(player); // Call the onSelectPlayer prop with the player object
    setSelectedPlayerId(player.Id);
  };

  return (
    <div className="col-md-4">
      <div className="card text-start mb-3">
        <img
          src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <table className="table table-sm">
            <tbody>
              <tr key={player.Id}>
                <th>Real Name</th>
                <td>{player.RealName}</td>
              </tr>
              <tr>
                <th>Player Name</th>
                <td>{player.PlayerName}</td>
              </tr>
              <tr>
                <th>Asset</th>
                <td>{player.Asset}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={handleSelect}>
            Select
          </button>
          {selectedPlayerId && <DetailsCard playerId={selectedPlayerId} />}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
