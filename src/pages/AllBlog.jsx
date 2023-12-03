import { useState } from "react";
import useBlogs from "../hooks/useBlogs";


const AllBlog = () => {

    const [search, setSearch] = useState('')
    const [blogs,refetch] = useBlogs(search)

    const handleSearch = (e) => {
        
        e.preventDefault()
        refetch()
        const searchText = e.target.search.value
        console.log(searchText)
        setSearch(searchText)
        
        
    }



    return (
        <div className="max-w-screen-xl mx-auto">

            <div>
                <form onSubmit={handleSearch} className="join">
                    <div>
                        <div>
                            <input name="search" className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>
                    
                    <div className="indicator">
                        
                        <button type="submit"  className="btn join-item">Search</button>
                    </div>
                </form>
            </div>
            <div >
                {blogs.map((blog) => (
                    <div key={blog._id} className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className="h-[25rem]" src={blog.imageURL} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{blog.title}</h2>
                            <div className="badge badge-secondary bg-black">{blog.category}</div>

                            <p>{blog.shortDescription}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-black text-white">Details</button>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default AllBlog;