import { Link } from "react-router-dom";
import useWishlist from "../hooks/useWishlist";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";


const WishList = () => {
    const [wishlists,refetch]=useWishlist()
    const axiosPublic = useAxiosPublic()


    const handleDelete = (id)=>{
      
      console.log(id)
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes remove it!"
      }).then((result) => {
          if (result.isConfirmed) {

              axiosPublic.delete(`/wishlists/${id}`)
                  .then(res => {
                      if (res.data.deletedCount > 0) {
                          refetch();
                          Swal.fire({
                              title: "Removed!",
                              text: "Removed from the wishlist.",
                              icon: "success"
                          });
                      }
                  })
          }
      });
    }
    return (
        <div>
            <div className="my-5">

                <h2 className=" text-3xl font-bold text-center ">
                    Wishlist
                </h2>
               {wishlists.length==0? <>
               <p className=" my-5 text-xl text-center font-bold ">There is no blog in your <span className="text-red-700">wish list.</span></p>
               </>
               :
               ''}
            </div>
            <div  >
                {wishlists.map((wishlist) => (
                    <div key={wishlist._id} className="card my-5 lg:card-side bg-base-100 shadow-xl">
                        <img className="h-[25rem ] w-[25rem]" src={wishlist.imageURL} />
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