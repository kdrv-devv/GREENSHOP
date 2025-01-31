import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";

interface UseQueryType{
    pathname:string,
    url:string,
    params?:object
}


const useQueryHandler = ({pathname , url , params}:UseQueryType) =>{
    const axios = useAxios()
    return useQuery({
        queryKey: [pathname],
        queryFn: () => axios({ url, params }).then((data) => data),
      });
}

export {useQueryHandler}