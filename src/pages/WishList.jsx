import { Link } from "react-router-dom";
import useWishlist from "../hooks/useWishlist";


const WishList = () => {
    const [wishlists]=useWishlist()
    const handleDelete = (id)=>{
      console.log(id)
    }
    return (
        <div>
            <div>
                hello boss
            </div>
            <div  >
                {wishlists.map((wishlist) => (
                    <div key={wishlist._id} className="card my-5 lg:card-side bg-base-100 shadow-xl">
                        <figure><img className="h-[25rem]" src={wishlist.imageURL} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{wishlist.title}</h2>
                            <div className="badge badge-secondary bg-black">{wishlist.category}</div>

                            <p>{wishlist.shortDescription}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/blogDetails/${wishlist.blogId}`}><button className="btn bg-black text-white">Details</button></Link>
                                
                                 <button 
                                onClick={()=>handleDelete(wishlist._id)} 
                                className="btn bg-black text-white">Remove</button>
                               
                            </div>
                        </div>
                    </div>
                ))}


            </div>
            
        </div>
    );
};

export default WishList;