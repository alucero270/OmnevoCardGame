import { useEffect, useState } from "react";
import config from "../types/config";
import { Player } from "../types/player";
const useFetchPlayers = ():Player[] => {
    
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const fetchPlayers = async () =>{
            const rsp = await fetch(`${config.baseApiUrl}/players`);
            const players = await rsp.json();
            setPlayers(players);
        } 
        fetchPlayers();
    }, []);

    return players;

}

export default useFetchPlayers;