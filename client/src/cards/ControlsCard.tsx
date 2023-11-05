const ControlsCard = () => {
    return (
        <div className="col-4">
            <div className="card text-center mb-4">
                <h3 className="card-header">Control Panel</h3>
                <div className="card-body">
                    <div className="btn-group">
                        <button className="btn btn-primary">
                            Sort Ascending
                        </button>
                        <button className="btn btn-primary">
                            Sort Descending
                        </button>
                    </div>
                    <div>

                    <button className="btn btn-light">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ControlsCard;