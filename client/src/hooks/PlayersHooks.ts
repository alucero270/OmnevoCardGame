import Config from "../config";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Player } from "../types/player";
import { useNavigate } from "react-router-dom";

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

const useUpdatePlayer = () => {
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Player>(
        (p) => axios.put(`${Config.baseApiUrl}/players`, p),
        {
            onSuccess: (_, player) => {
                queryClient.invalidateQueries("players");
            }
        }
    )
}


export { useFetchPlayers, useFetchPlayer, useUpdatePlayer }