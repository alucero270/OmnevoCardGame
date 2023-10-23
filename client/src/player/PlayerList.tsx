import { useState } from "react";
import { Player } from "../types/player";
import config from "../types/config";

const PlayerList = () => {
    const [players, setPlayers] = useState<Player[]>([]);

    const fetchPlayers = async () =>{
        const rsp = await fetch(`${config.baseApiUrl}/players`);
        const players = await rsp.json();
        setPlayers(players);
    } 
    fetchPlayers();

    return (
        <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Players currently in the game
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Real Name</th>
            <th>Player Name</th>
            <th>Asset</th>
          </tr>
        </thead>
        <tbody>
          {
            players.map((p: Player) => (
              <tr key={p.id}>
                <td>{p.RealName}</td>
                <td>{p.PlayerName}</td>
                <td>{(p.Asset)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      
    </div>
    )
};

export default PlayerList;