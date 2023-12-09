import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useTravel= (search) => {
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: travel = [],  refetch:reTravel} = useQuery({
        queryKey: ['travel',search],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/blogs?search=${search}&category=Travel`);
            return res.data;
        }
    })


    return [travel, reTravel]
};

export default useTravel