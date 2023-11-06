import { useAddPlayer } from "../../hooks/PlayersHooks";
import { Player } from "../../types/player";
import SubmitPlayerDetails from "./SubmitPlayer";

const AddPlayer = () => {
    const addPlayerMutation = useAddPlayer();
    
    const player: Player = {
        Id: 0,
        RealName: "",
        PlayerName: "",
        Asset: ""
    };

    return (
        <SubmitPlayerDetails
            player={player}
            submitted={(p) => addPlayerMutation.mutate(p)}
            />
    )
};