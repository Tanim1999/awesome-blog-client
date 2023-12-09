import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useEntertainment= (search) => {
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: entertainment = [],  refetch:reEntertainment} = useQuery({
        queryKey: ['entertainment',search],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/blogs?search=${search}&category=Entertainment`);
            return res.data;
        }
    })


    return [entertainment, reEntertainment]
};

export default useEntertainment