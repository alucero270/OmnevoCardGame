import Config from "../config";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { Player } from "../types/player";

const useFetchPlayers = (sortOrder: string) => {
    return useQuery<Player[], AxiosError>(["players", sortOrder], () =>
        axios.get(`${Config.baseApiUrl}/players?sortOrder=${sortOrder}`)
            .then((resp) => resp.data)
    );
};




const useFetchPlayer = (Id: number) => {
    return useQuery<Player, AxiosError>(["players", Id], () =>
        axios.get(`${Config.baseApiUrl}/players/${Id}`)
            .then((resp) => resp.data)
    );
};




export { useFetchPlayers, useFetchPlayer }