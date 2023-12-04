import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";



const useWishlist= () => {
    const {user}= useAuth()
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: wishlists = [],  refetch} = useQuery({
        queryKey: ['wishlists',user],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/wishlists?email=${user.email}`);
            return res.data;
        }
    })


    return [wishlists, refetch]
};

export default useWishlist