import { useState } from "react";
import { Player } from "../../types/player";

type PlayerCardProps = {
  player: Player;
  onSelectPlayer: (player: Player) => void;
};

const PlayerCard = ({ player, onSelectPlayer }: PlayerCardProps) => {
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);
  const handleSelect = () => {
    onSelectPlayer(player); // Call the onSelectPlayer prop with the player object
    setSelectedPlayerId(player.id);
  };

  return (
    <div className="col-md-4">
      <div className="card text-start mb-3 h-100">
        <img
          src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <table className="table table-sm ">
            <tbody>
              <tr key={player.id}>
                <th >Real Name</th>
                <td>{player.realName}</td>
              </tr>
              <tr>
                <th>Player Name</th>
                <td>{player.playerName}</td>
              </tr>
              <tr>
                <th>Asset</th>
                <td>{player.asset}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={handleSelect}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
