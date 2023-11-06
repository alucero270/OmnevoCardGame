import ApiStatus from "../ApiStatus";
import useFetchPlayers from "../hooks/PlayersHooks";
import { Player } from "../types/player";
import PlayerCard from "../components/cards/PlayerCard";

type PlayerListProps = {
  onSelectPlayer: (player: Player) => void;
};

const PlayerList = ({ onSelectPlayer }: PlayerListProps) => {
 
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

      {data && data.map((p: Player) => (
        <PlayerCard player={p} key={p.Id} onSelectPlayer={onSelectPlayer} />
      ))}

      </div>

    </div>
  )
};

export default PlayerList;

