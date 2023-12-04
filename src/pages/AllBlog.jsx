import { useState } from "react";
import useBlogs from "../hooks/useBlogs";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";




const AllBlog = () => {
    const{user}= useAuth()

    const [search, setSearch] = useState('')
    
    const axiosPublic= useAxiosPublic()
    

    

    const[active,setActive]=useState(false)
    const [blogs,refetch] = useBlogs(search)

    const handleSearch = (e) => {
        
        e.preventDefault()
        refetch()
        const searchText = e.target.search.value
        console.log(searchText)
        setSearch(searchText)
        
        
        
        
    }
    const handleAddToWishList = async (blog)=>{
        
      
    
     const  uploadInfo = {
        title: blog.title,
        imageURL: blog.imageURL,
        category: blog.category,
        shortDescription: blog.shortDescription,
        longDescription: blog.longDescription,
        wishlistOf: user.displayName,
        blogId:blog._id,
        email: user.email,
        
    }
    const wishlist = await axiosPublic.post('/wishlists', uploadInfo);
       
        console.log("aftr up",wishlist)
        if (wishlist.data.insertedId) {
            
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${blog.title} is added successfully.`,
                showConfirmButton: false,
                timer: 1500
            });
          

        } else{
             Swal.fire({
                position: "top-end",
                icon: "info",
                title: `${blog.title} already exist in the wish list.`,
                showConfirmButton: false,
                timer: 3000
            });
            
        }
        


     
     
    }
   

   



    return (
        <div className="max-w-screen-xl mx-auto">

            <div className="flex justify-center my-7">
                <form onSubmit={handleSearch} className="join ">
                    <div>
                        <div>
                            <input name="search" className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>
                    
                    <div className="indicator">
                        
                        <button type="submit"  className="btn btn-neutral join-item">Search</button>
                    </div>
                </form>
                <button onClick={()=>{setActive(!active)}} className={`btn ${active?"bg-red-700":"bg-black"} text-white`}>Default</button>
            </div>
            <div  >
                {blogs.map((blog) => (
                    <div key={blog._id} className="card my-5 lg:card-side bg-base-100 shadow-xl">
                        <figure><img className="h-[25rem]" src={blog.imageURL} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{blog.title}</h2>
                            <div className="badge badge-secondary bg-black">{blog.category}</div>

                            <p>{blog.shortDescription}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/blogDetails/${blog._id}`}><button className="btn bg-black text-white">Details</button></Link>
                                {user? <button 
                                onClick={()=>handleAddToWishList(blog)} 
                                className="btn bg-black text-white">Add to wishlist</button>:<Link to="/logIn"><button className="btn bg-black text-white">Add to wishlist</button></Link>}
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default AllBlog;