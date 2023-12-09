import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useSports= (search) => {
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: sports = [],  refetch:reSports} = useQuery({
        queryKey: ['sports',search],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/blogs?search=${search}&category=Sports`);
            return res.data;
        }
    })


    return [sports, reSports]
};

export default useSports