import { useState } from "react";
import { Player } from "../../types/player";

type Args = {
    player: Player;
    submitted: (player: Player) => void;
}

const SubmitPlayerDetails = ({ player, submitted }: Args) => {
    const [playerState, setPlayerState] = useState({ ...player })
    const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        submitted(playerState)
    }
    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="RealName">RealName</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="RealName"
                    value={playerState.RealName}
                    onChange={(e) =>
                        setPlayerState({ ...playerState, RealName: e.target.value })
                    }
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="PlayerName">PlayerName</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="PlayerName"
                    value={playerState.PlayerName}
                    onChange={(e) =>
                        setPlayerState({ ...playerState, PlayerName: e.target.value })
                    }
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="Asset">Assets</label>
                <textarea
                    className="form-control"
                    placeholder="Assets"
                    value={playerState.Asset}
                    onChange={(e) =>
                        setPlayerState({ ...playerState, Asset: e.target.value })
                    }
                />
            </div>
            <button
                className="btn btn-primary mt-2"
                disabled={!playerState.RealName || !playerState.PlayerName || !playerState.Asset }
                onClick={onSubmit}
            >
                Submit
            </button>
        </form>
    );
}

export default SubmitPlayerDetails; 