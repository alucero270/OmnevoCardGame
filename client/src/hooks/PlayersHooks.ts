import Config from "../config";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { Player } from "../types/player";

const useFetchPlayers = () => {
    return useQuery<Player[], AxiosError>("players", () =>
        axios.get(`${Config.baseApiUrl}/players`)
            .then((resp) => resp.data)
    );
};


const useFetchPlayer = (Id: number) => {
    return useQuery<Player, AxiosError>(["players", Id], () =>
        axios.get(`${Config.baseApiUrl}/players/${Id}`)
            .then((resp) => resp.data)
    );
};

// const useAddPlayer = () => {
//     const nav = useNavigate();
//     const queryClient = useQueryClient();
//     return useMutation<AxiosResponse, AxiosError, Player>(
//         (p) => axios.post(`${Config.baseApiUrl}/players`, p),
//         {
//             onSuccess: () => {
//                 queryClient.invalidateQueries("players");
//                 nav("/");
//             }
//         }

//     )
// }

// const useUpdatePlayer = () => {
//     const nav = useNavigate();
//     const queryClient = useQueryClient();
//     return useMutation<AxiosResponse, AxiosError, Player>(
//         (p) => axios.put(`${Config.baseApiUrl}/players`, p),
//         {
//             onSuccess: (_, player) => {
//                 queryClient.invalidateQueries("players");
//                 nav(`/player/${player.Id}`);
//             }
//         }
//     )
// }

// const useDeletePlayer = () => {
//     const nav = useNavigate();
//     const queryClient = useQueryClient();
//     return useMutation<AxiosResponse, AxiosError, Player>(
//         (p) => axios.delete(`${Config.baseApiUrl}/players${p.Id}`),
//         {
//             onSuccess: (_, player) => {
//                 queryClient.invalidateQueries("players");
//                 nav(`/player/${player.Id}`);
//             }
//         }
//     )
// }


export { useFetchPlayers, useFetchPlayer }
// export {useAddPlayer,useUpdatePlayer, useDeletePlayer};