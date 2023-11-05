import { Link, useParams } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import { useFetchPlayer } from "../hooks/PlayersHooks";

const PlayerDetail = () => {
    const { id } = useParams();
    if (!id) throw Error("Player not found");
    const playerId = parseInt(id);

    const { data, status, isSuccess } = useFetchPlayer(playerId);
    if (!isSuccess) return <ApiStatus status={status} />
    if (!data) return <div>Player Not found</div>
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img
                        className="img-fluid"
                        // src={data.photo ? data.photo : defaultImage}
                        alt="House pic"
                    />
                </div>
                <div className="row mt-3">
                    <div className="col-2">
                        <Link
                            className="btn btn-primary w-100"
                            to={`/house/edit/${data.Id}`}
                        >
                            Edit
                        </Link>
                    </div>
                    <div className="col-2">
                        <button
                            className="btn btn-danger w-100"
                            // onClick={() => {
                            //     if (window.confirm("Are you sure?"))
                            //         deleteHouseMutation.mutate(data);
                            // }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{data.RealName}</h5>
                </div>
                <div className="row">
                    <h3 className="col-12">{data.PlayerName}</h3>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">{data.Asset}</div>
                </div>
                {/* <Bids house={data} /> */}
            </div>
        </div>
    );
};

export default PlayerDetail;