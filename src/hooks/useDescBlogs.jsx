import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useDescBlogs= () => {
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: descblogs = [],  refetch} = useQuery({
        queryKey: ['descblogs'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/blogs?sort=desc`);
            return res.data;
        }
    })


    return [descblogs, refetch]
};

export default useDescBlogs