import useBlogs from "../hooks/useBlogs";


const AllBlog = () => {
    const [blogs] = useBlogs()


    return (
        <div className="max-w-screen-xl mx-auto">
            <div className=" ">
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