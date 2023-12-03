import error from "../assets/_f2bf6da4-292a-4db6-8fe0-ce45b3d0a91d.jpeg"

const Error = () => {
    return (
        <div>
            <img className="mx-auto rounded-full h-[80vh]" src={error} />
            <p className=" text-3xl font-bold text-center text-red-700">
                Page does not exist
            </p>
        </div>
    );
};

export default Error;