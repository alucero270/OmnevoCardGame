import { useNavigate } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import useFetchPlayers from "../hooks/PlayersHooks";
import { Player } from "../types/player";
import PlayerCard from "../components/cards/PlayerCard";

const PlayerList = () => {
  const nav = useNavigate();
  const { data, status, isSuccess } = useFetchPlayers();
  if (!isSuccess) return <ApiStatus status={status}></ApiStatus>;

  return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Players currently in the game
        </h5>
      </div>
      {/* row of player cards */}
      <div className="row mb-2">

        {/* insert for each loop here to get the players grid */}
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
      {/* <div>
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

      </div> */}
    </div>
  )
};

export default PlayerList;

// {
// data && data.map((p: Player) => (
//   <tr key={p.Id} onClick={() => nav(`/player/${p.Id}`)}>
//     <td>{p.RealName}</td>
//     <td>{p.PlayerName}</td>
//     <td>{p.Asset}</td>
//   </tr>
// ))}