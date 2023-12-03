import { Link, useLoaderData,  } from "react-router-dom";

import useAuth from "../hooks/useAuth";


const BlogDetails = () => {
    const {_id,imageURL,title,category,shortDescription,longDescription,email} =useLoaderData()
    
    const { user } = useAuth()
   
    return (

        <div className="card my-5 lg:card-normal bg-base-100 shadow-xl">
            <figure><img className="h-[25rem]" src={imageURL} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="badge badge-secondary bg-black">{category}</div>

                <p>{shortDescription}</p>
                <p>{longDescription}</p>
                <div className="card-actions justify-end">
                    {user.email === email ? <Link to={`/updateBlog/${_id}`}><button className="btn bg-black text-white">Edit blog</button></Link> : ""}
                    
                </div>
            </div>
        </div>


    );
};

export default BlogDetails;