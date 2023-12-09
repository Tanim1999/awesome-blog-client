/* eslint-disable react/prop-types */
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useSpring,animated } from "react-spring";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth"
import useAxiosPublic from "../hooks/useAxiosPublic";



const BlogCard = ({ blog }) => {


    const [ref, inView] = useInView({
      // Only trigger once when the component is in view
    });
  
    const props = useSpring({
      opacity: inView ? 1 : 0,
      from: { opacity: 0 },
      config: { duration: 1000 },
    });

    const { user } = useAuth()

    

    const axiosPublic = useAxiosPublic()




  
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
                timer: 2000
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
      <animated.div
        style={props}
        ref={ref}
        className={`card my-5 lg:card-side bg-base-100 shadow-xl ${inView ? " " : ""} `}
      >
        {blog.imageURL ? (
          <img className="h-[25rem] w-[25rem]" src={blog.imageURL} alt={blog.title} />
        ) : (
          <Skeleton width="100%" height="25rem" />
        )}
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <div className="badge badge-secondary bg-black">{blog.category}</div>
          {blog.shortDescription ? (
            <p>{blog.shortDescription}</p>
          ) : (
            <Skeleton width="100%" height="1rem" count={3} />
          )}
          <div className="card-actions flex-1 justify-end">
            <Link to={`/blogDetails/${blog._id}`}>
              <button className="btn bg-black text-white">Details</button>
            </Link>
            {user ? (
              <button onClick={() => handleAddToWishList(blog)} className="btn bg-black text-white">
                Add to wishlist
              </button>
            ) : (
              <Link to="/logIn">
                <button className="btn bg-black text-white">Add to wishlist</button>
              </Link>
            )}
          </div>
        </div>
      </animated.div>
    );
  };
  
export default BlogCard;