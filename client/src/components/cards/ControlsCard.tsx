type ControlsCardProps = {
    onSubmit: () => void;
    onSortAscending: () => void;
    onSortDescending: () => void;
};

const ControlsCard = ({ onSubmit, onSortAscending, onSortDescending }: ControlsCardProps) => {
    return (
        <div className="col-sm-4">
            <div className="card text-center mb-4 h-100">
                <h3 className="card-header">Control Panel</h3>
                <div className="card-body">
                    <div className="card-row w-100">
                        <div className="col mt-3">
                        <div className="btn-group">
                            <button className="btn btn-primary" onClick={onSortAscending}>
                                Sort Ascending
                            </button>
                            <button className="btn btn-primary" onClick={onSortDescending}>
                                Sort Descending
                            </button>
                        </div>

                        </div>
                        <div className="card-row mt-3">
                            <button className="btn btn-primary btn-block" onClick={onSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ControlsCard;
