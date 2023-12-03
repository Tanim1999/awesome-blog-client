import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useComments= (id) => {
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: comments = [],  refetch} = useQuery({
        queryKey: ['comments',id],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/comments?commentId=${id}`);
            return res.data;
        }
    })


    return [comments, refetch]
};

export default useComments