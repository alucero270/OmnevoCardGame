import { useState } from "react";
import { Player } from "../../types/player";
import { isNullishCoalesce } from "typescript";
import { useUpdatePlayer } from "../../hooks/PlayersHooks";

type ControlsCardProps = {
    playerData?: Player | null;
    onSortAscending: () => void;
    onSortDescending: () => void;
};

const ControlsCard = ({ playerData, onSortAscending, onSortDescending }: ControlsCardProps) => {
    
    const updatePlayerMutation = useUpdatePlayer();

    const onSubmit = () => {
        if (playerData) {
          console.log(playerData);
        updatePlayerMutation.mutate(playerData);
        }
      };
      

    return (
        <div className="col-sm-4">
                        <div className="card h-100 w-100 align-items-center">
                <div className="row g-0">
                    <h3 className="card-header text-center">Control Panel</h3>
                    <div className="card-body justify-content-center">
                        <div className="d-grid gap-2">
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btnradio1"
                                    autoComplete="off"
                                    checked />
                                <label
                                    className="btn btn-outline-primary"
                                    htmlFor="btnradio1"
                                    onClick={onSortAscending}>
                                    Sort Ascending</label>

                                <input type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btnradio2"
                                    autoComplete="off" />
                                <label className="btn btn-outline-primary"
                                    htmlFor="btnradio2"
                                    onClick={onSortDescending}>
                                    Sort Descending</label>
                            </div>
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