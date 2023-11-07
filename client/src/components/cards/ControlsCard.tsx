
type ControlsCardProps = {
    onSubmit: () => void;
};

const ControlsCard = ({ onSubmit }: ControlsCardProps) => {
    return (
        <div className="col-sm-4">
            <div className="card text-center mb-4 h-100">
                <h3 className="card-header">Control Panel</h3>
                <div className="card-body">
                    <div className="card-row w-100">
                        <div className="btn-group">

                        <button className="btn btn-primary">
                            Sort Ascending
                        </button>
                        <button className="btn btn-primary">
                            Sort Descending
                        </button>
                        </div>
                        <div className="card-row">
                            <button className="btn btn-primary btn-block" onClick={onSubmit}>
                                Submit
                            </button>
                        </div>
                        <div className="card-row">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlsCard;
