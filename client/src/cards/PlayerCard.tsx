const PlayerCard = () => {
    // const { id } = useParams();
    // if (!id) throw Error("Player not found");
    // const playerId = parseInt(id);

    // const { data, status, isSuccess } = useFetchPlayer(playerId);
    // if (!isSuccess) return <ApiStatus status={status} />
    // if (!data) return <div>Player Not found</div>
    return (
        <div className="col-md-4">
            <div className="card text-start mb-3" >
                <img
                    src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="card-img-top">
                </img>
                <div className="card-body">
                    <table className="table table-sm">
                        <tbody>
                            <tr>
                                <th>Real Name</th>
                                <td>Real name</td>
                            </tr>
                            <tr>
                                <th>Player Name</th>
                                <td>Player name</td>
                            </tr>
                            <tr>
                                <th>Asset</th>
                                <td>Asset</td>
                            </tr>
                        </tbody>
                    </table>
                    <button  className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>

    )
}
export default PlayerCard;