import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const AddBlog = () => {
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const {
        register,
        reset,

        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log("uploaded image", res.data.data.display_url
        )
        const photoURL = res.data.data.display_url

        const uploadInfo = {
            title: data.title,
            imageURL: photoURL,
            category: data.category,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            author: user.displayName,
            uploadDate: new Date().toISOString(),
            email: user.email,
            authorDp: user.photoURL
        }
        const blog = await axiosPublic.post('/blogs', uploadInfo);
        console.log(blog.data)
        if (blog.data.insertedId) {

            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is added successfully.`,
                showConfirmButton: false,
                timer: 1500
            });

        }
        





    }
    return (
        <div className=" flex justify-center my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card flex-shrink-0 w-[45rem] border-[2px] bg-black bg-opacity-40 shadow-none border-slate-500">
                    <div className="card-body">
                        <h1 className="text-3xl text-center text-black font-bold">Add Blog</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Title</span>
                            </label>
                            <input
                                type="text"
                                {...register('title', { required: true })}
                                name="title"
                                placeholder="Title"
                                className="input input-bordered"
                                required
                            />
                            {errors.title && <span>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Image</span>
                            </label>
                            <input type="file"  {...register('image', { required: true })} placeholder=" Blog image" className="file-input file-input-bordered w-full max-w-xs" />
                            {errors.name && <span>This field is required</span>}

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-white font-bold">Category</span>
                            </label>
                            <select {...register('category', { required: true })} className="select select-bordered" required>
                                <option value="" className="font-bold" disabled>
                                    Select Category:
                                </option>
                                <option value="Technology">Technology</option>
                                <option value="Travel">Travel</option>
                                <option value="Educational">Educational</option>
                                <option value="Sports">Sports</option>
                                <option value="Entertainment">Entertainment</option>
                                
                                
                            </select>
                            {errors.category && <span>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Short Description</span>
                            </label>
                            <input
                                type="text"
                                {...register('shortDescription', { required: true })}
                                name="shortDescription"
                                placeholder="Short Description"
                                className="input input-bordered"
                                required
                            />
                            {errors.shortDescription && <span>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Long Description</span>
                            </label>
                            <textarea
                                {...register('longDescription', { required: true })}
                                name="longDescription"
                                placeholder="Long Description"
                                className="textarea textarea-bordered"
                                required
                            />
                            {errors.longDescription && <span>This field is required</span>}
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white bg-black">
                                Add Blog
                            </button>
                        </div>
                    </div>
                </div>
            </form>







        </div>
    );
};

export default AddBlog;