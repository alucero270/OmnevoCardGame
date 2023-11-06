
const PlayerDetail = () => {
    return (
        <div className="col-sm-8">
            <div className="card text-start mb-3 h-100" >
                <h3 className="card-header">player.Id</h3>
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="img-fluid rounded-start">
                        </img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <table className="table table-sm">
                                <tbody>
                                    <tr>
                                        <th>Real Name</th>
                                        <td>player.RealName</td>
                                    </tr>
                                    <tr>
                                        <th>Player Name</th>
                                        <td>player.PlayerName</td>
                                    </tr>
                                    <tr>
                                        <th>Asset</th>
                                        <td>player.Asset</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlayerDetail;