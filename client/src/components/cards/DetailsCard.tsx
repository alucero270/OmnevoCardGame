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
  if (!data) return <div>Player Not found</div>;

  const player = data; // Assign the fetched player data to a variable

  return (
    <div className="col-sm-8">
      <div className="card text-start mb-3 h-100">
        <h3 className="card-header">{player.Id}</h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
