import Config from "../config";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Player } from "../types/player";

const useFetchPlayers = (sortOrder: string) => {
    return useQuery<Player[], AxiosError>(["players", sortOrder], () =>
        axios.get(`${Config.baseApiUrl}/players?sortOrder=${sortOrder}`)
            .then((resp) => resp.data)
    );
};




const useFetchPlayer = (Id: Player | null) => {
    return useQuery<Player, AxiosError>(["players", Id], () =>
        axios.get(`${Config.baseApiUrl}/players/${Id}`)
            .then((resp) => resp.data)
    );
};

const useUpdatePlayer = (Player: Player | null) => {
    const queryClient = useQueryClient();
  
    return useMutation<AxiosResponse, AxiosError, number>(
      (id) => axios.put(`${Config.baseApiUrl}/players/${id}`),
      {
        onSuccess: (_, id) => {
          queryClient.invalidateQueries("players");
        },
      }
    );
  };



export { useFetchPlayers, useFetchPlayer, useUpdatePlayer }