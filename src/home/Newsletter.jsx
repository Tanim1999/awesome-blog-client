import Swal from "sweetalert2";


const Newsletter = () => {

    const handleSubmit = (e) => {
         e.preventDefault()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for subscription",
            showConfirmButton: false,
            timer: 2000
        });
        e.target.reset()


    }
    return (
        <div className="my-10">
            <h2 className="text-center font-bold text-3xl ">Newsletter</h2>
            <div className="my-5 flex justify-center ">
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="join">
                        <input type="email" className="input input-bordered join-item" placeholder="Email" />
                        <button type="submit"

                            className="btn join-item bg-black text-white rounded-r-full">Subscribe</button>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Newsletter;