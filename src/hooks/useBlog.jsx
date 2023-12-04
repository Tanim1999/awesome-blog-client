import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";




const useBlog = (id) => {
    
    const axiosPublic = useAxiosPublic();
    
   


    const {data: blog = [],refetch:redone,} = useQuery({
        queryKey: ['blog',], 
        
        
        queryFn: async() =>{
            const res = await axiosPublic.get(`/blogs/${id}`);
            return res.data;
            
        }
        
    })
    
    
    
    
    return [blog,redone]


};

export default useBlog;