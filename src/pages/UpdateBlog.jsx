import { useParams } from "react-router-dom";
import useBlog from "../hooks/useBlog";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";


const UpdateBlog = () => {
    const { id } = useParams()
    const [blog] = useBlog(id)
  
    const axiosPublic = useAxiosPublic()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


    const {
        register,
        reset,

        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        console.log(imageFile)

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log("uploaded image", res.data.data.display_url
        )
        const photoURL = res.data.data.display_url
        const editInfo = {
            title: data.title ? data.title : blog.title,
            imageURL: photoURL ? photoURL : blog.imageURL,
            category: data.category ? data.category : blog.category,
            shortDescription: data.shortDescription ? data.shortDescription : blog.shortDescription,
            longDescription: data.longDescription ? data.longDescription : blog.longDescription,




        }
        const editedBlog = await axiosPublic.patch(`/blogs/${blog._id}`, editInfo);
        console.log(blog.data)
        if (editedBlog.data.modifiedCount > 0) {

            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is edited successfully.`,
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
                        <h1 className="text-3xl text-center text-black font-bold">Edit Blog</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Title</span>
                            </label>
                            <input
                                type="text"
                                {...register('title')}
                                name="title"
                                placeholder="Title"
                                className="input input-bordered"
                                defaultValue={blog.title}
                            />
                            {errors.title && <span>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Image</span>
                            </label>
                            <input required type="file"  {...register('image')} placeholder=" Blog image" className="file-input file-input-bordered w-full max-w-xs" />
                            {errors.name && <span className="text-red">This field is required</span>}

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
                                {...register('shortDescription')}
                                name="shortDescription"
                                placeholder="Short Description"
                                className="input input-bordered"
                                defaultValue={blog.shortDescription}
                            />
                            {errors.shortDescription && <span>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Long Description</span>
                            </label>
                            <textarea
                                {...register('longDescription')}
                                name="longDescription"
                                placeholder="Long Description"
                                className="textarea textarea-bordered"
                                defaultValue={blog.longDescription}
                            />
                            {errors.longDescription && <span>This field is required</span>}
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white bg-black">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </form>







        </div>
    );
};

export default UpdateBlog;