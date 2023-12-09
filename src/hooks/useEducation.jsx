import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useEducation= (search) => {
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: education = [],  refetch:reEducation} = useQuery({
        queryKey: ['education',search],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/blogs?search=${search}&category=Educational`);
            return res.data;
        }
    })


    return [education, reEducation]
};

export default useEducation