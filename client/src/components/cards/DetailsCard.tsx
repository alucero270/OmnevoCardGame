import { useEffect } from "react";
import ApiStatus from "../../ApiStatus";
import { useFetchPlayer } from "../../hooks/PlayersHooks";

type DetailsCardProps = {
  playerId: number;
};

const DetailsCard = ({ playerId }: DetailsCardProps) => {
  const { data, isSuccess } = useFetchPlayer(playerId);

  useEffect(() => {
    if (playerId) {
      console.log(`Fetching player with ID: ${playerId}`);
    }
  }, [playerId]);

  if (!isSuccess) return <ApiStatus status={"loading"} />;

  const player = data || {}; // Assign the fetched player data to a variable or an empty object if data is null

  return (
    <div className="row w-100 g-0">
      <h3 className="card-header text-center">
        {player.realName}
      </h3>
      <div className="card-body">
        <h4 className="">Player Name:</h4>
        <h5 >{player.playerName}</h5>
        <h4 className="">Asset:</h4>
        <h5>{player.asset}</h5>
      </div>
    </div>
  );
};

export default DetailsCard;