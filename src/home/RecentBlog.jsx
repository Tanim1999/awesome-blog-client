import { Link } from "react-router-dom";
import useDescBlogs from "../hooks/useDescBlogs";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";


const RecentBlog = () => {
    const [descblogs] = useDescBlogs()
    const recentBlogs = descblogs.slice(0, 5)
    const { user } = useAuth()
    const axiosPublic= useAxiosPublic()



    const handleAddToWishList = async (blog) => {



        const uploadInfo = {
            title: blog.title,
            imageURL: blog.imageURL,
            category: blog.category,
            shortDescription: blog.shortDescription,
            longDescription: blog.longDescription,
            wishlistOf: user.displayName,
            blogId: blog._id,
            email: user.email,

        }
        const wishlist = await axiosPublic.post('/wishlists', uploadInfo);

        console.log("aftr up", wishlist)
        if (wishlist.data.insertedId) {


            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${blog.title} is added successfully.`,
                showConfirmButton: false,
                timer: 1500
            });


        } else {
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
        <div className="my-5">

            <div>
                <h2 className="text-3xl text-center  font-bold">Recent blogs</h2>
            </div>
            {recentBlogs.map((blog) => (
                <div key={blog._id} className="card my-5 lg:card-side bg-base-100 shadow-xl">
                    <figure><img className="h-[25rem]" src={blog.imageURL} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{blog.title}</h2>
                        <div className="badge badge-secondary bg-black">{blog.category}</div>

                        <p>{blog.shortDescription}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/blogDetails/${blog._id}`}><button className="btn bg-black text-white">Details</button></Link>
                            {user ? <button
                                onClick={() => handleAddToWishList(blog)}
                                className="btn bg-black text-white">Add to wishlist</button> : <Link to="/logIn"><button className="btn bg-black text-white">Add to wishlist</button></Link>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentBlog;