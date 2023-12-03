import { Link, useLoaderData, } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useComments from "../hooks/useComments";


const BlogDetails = () => {
    const { _id, imageURL, title, category, shortDescription, longDescription, email } = useLoaderData()
    const [comments, refetch] = useComments(_id)
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleComment = async (e) => {
        e.preventDefault()

        const comment = e.target.comment.value
        console.log(comment)
        const commentInfo = {
            comment: comment,
            commenterName: user.displayName,
            commenterEmail: user.email,
            commenterDp: user.photoURL,
            date: new Date().toISOString,
            commentId: _id

        }
        const commented = await axiosPublic.post('/comments', commentInfo);
        console.log(commented.data)
        if (commented.data.insertedId) {

            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `commented successfully.`,
                showConfirmButton: false,
                timer: 1500
            });
            e.target.reset();

        }


    }


    return (

        <div>
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
                <div className="flex justify-center items-center">
                    {user.email === email ? <><p className="font-bold">You can not comment on your own blog.</p></>
                        :
                        <>
                            <form className="flex flex-col items-end " onSubmit={handleComment}>
                                <textarea name="comment" placeholder="comment.." className="textarea textarea-bordered textarea-lg w-[20rem] md:w-[40rem]  " ></textarea>


                                <button type="submit" className="btn bg-black text-white">comment</button>
                            </form>
                        </>
                    }

                </div >
                <div>
                    <p className="font-bold text-xl p-10">Comments:</p>
                </div>
                <div className="flex flex-col w-[80%]  mx-auto my-5 gap-5">
                    {comments.map((comment) => (
                        <div key={comment._id} >
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" src={comment.commenterDp} />
                                    </div>
                                </div>
                                <div className="chat-bubble">{comment.comment}</div>
                            </div>

                        </div>
                    ))}


                </div>




            </div>
        </div>


    );
};

export default BlogDetails;