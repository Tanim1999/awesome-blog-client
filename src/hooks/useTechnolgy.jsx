import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useTechnology= (search) => {
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: technology = [],  refetch:reTechnology} = useQuery({
        queryKey: ['technology',search],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/blogs?search=${search}&category=Technology`);
            return res.data;
        }
    })


    return [technology, reTechnology]
};

export default useTechnology