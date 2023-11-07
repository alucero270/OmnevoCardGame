import { useEffect } from "react";
import ApiStatus from "../../ApiStatus";
import { useFetchPlayer } from "../../hooks/PlayersHooks";

type DetailsCardProps = {
  playerId: number;
};

const DetailsCard = ({ playerId }: DetailsCardProps) => {
  const { data, status, isSuccess } = useFetchPlayer(playerId);

  useEffect(() => {
    if (playerId) {
      console.log(`Fetching player with ID: ${playerId}`);
    }
  }, [playerId]);

  if (!isSuccess) return <ApiStatus status={status} />;

  const player = data || {}; // Assign the fetched player data to a variable or an empty object if data is null

  return (
    <div className="row">
      <div className="col-md-4">
        <img
          src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="img-fluid rounded-start"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <table className="table table-sm">
            <tbody>
              <tr>
                <th>Real Name</th>
                <td>{player.realName || 'N/A'}</td>
              </tr>
              <tr>
                <th>Player Name</th>
                <td>{player.playerName || 'N/A'}</td>
              </tr>
              <tr>
                <th>Asset</th>
                <td>{player.asset || 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard; 