import Config from "../config";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { Player } from "../types/player";

const useFetchPlayers = () => {
    // return useQuery<Player[], AxiosError>("players", () => 
    // axios.get(`${config.baseApiUrl}/players`).then(
    //     (resp) => resp.data)
    // );  
    return useQuery<Player[], AxiosError>("players", () =>
    axios.get(`${Config.baseApiUrl}/players`)
        .then((resp) => resp.data)
  );
};

const useFetchPlayer = (id:number) => {
    return useQuery<Player, AxiosError>(["players", id], () => 
    axios.get(`${Config.baseApiUrl}/players/${id}`)
        .then((resp) => resp.data)
    ); 
}

export default useFetchPlayers;
export {useFetchPlayer};