import { useState } from "react";
import { Player } from "../../types/player";



const ControlsCard = () =>{
    
    return (
        <div className="col-sm-4">
            <div className="card text-center mb-4 h-100 align-self-end">
                <h3 className="card-header">Control Panel</h3>
                <div className="card-body">
                    <div className="card-row">
                            {/* make button active on click */}
                            <button className="btn btn-primary">
                                Sort Ascending
                            </button>
                            <button className="btn btn-primary">
                                Sort Descending
                            </button>
                        <div className="card-row">
                            <button className="btn btn-light" >Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ControlsCard;    