import useFetchPlayers from "../hooks/PlayersHooks";
import { Player } from "../types/player";

const PlayerList = () => {
    const {data} = useFetchPlayers();

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
            data && data.map((p: Player) => (
              <tr key={p.Id}>
                <td>{p.RealName}</td>
                <td>{p.PlayerName}</td>
                <td>{p.Asset}</td>
              </tr>
            ))}
        </tbody>
      </table>
      
    </div>
    )
};

export default PlayerList;