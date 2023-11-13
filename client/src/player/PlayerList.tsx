import ApiStatus from "../ApiStatus";
import { Player } from "../types/player";
import PlayerCard from "../components/cards/PlayerCard";
import { useFetchPlayers } from "../hooks/PlayersHooks";

type PlayerListProps = {
  onSelectPlayer: (player: Player) => void;
  sortOrder: string;
};

const PlayerList = ({ onSelectPlayer, sortOrder }: PlayerListProps) => {
  const { data, status, isSuccess } = useFetchPlayers(sortOrder);
  if (!isSuccess) return <ApiStatus status={status}></ApiStatus>;

  return (
    <div className="row w-100 justify-content-evenly">
      <h5 className="text-center">
        Players currently in the game
      </h5>
      <div className="row w-100 align-items-center">
        {data && data.map((p: Player) => (
          <PlayerCard player={p} key={p.id} onSelectPlayer={onSelectPlayer} />
        ))}
      </div>
    </div>
  )
};

export default PlayerList;
