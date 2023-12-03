
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { signInWithPopup } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";









const LogIn = () => {
    
    



    const navigate = useNavigate()
    const { signIn, auth, provider} = useContext(AuthContext)


    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
                                Swal.fire({
                    title: 'Success!',
                    text: 'Logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                    
                })}).catch(error => {
                console.error(error)
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: "error",
                    confirmButtonText: 'Okay'
                })
            })

    }





    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        signIn(email, password)

            .then(result => {
                
                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })

               
                e.target.reset()
               
                navigate('/')
                

            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: "error",
                    confirmButtonText: 'Okay'
                })
            })
            
    };


    return (

        <div className=" min-h-screen">
            <Helmet><title>Login</title></Helmet>
            <div>
                <div className="hero min-h-screen bg-contain" style={{ backgroundImage: 'url(https://i.ibb.co/TBDp1mT/59a36f03-e377-49cd-af79-2ea2d45356ca.jpg)' }}>
                    <div className="hero-content flex-col lg:flex-row">

                        <form onSubmit={handleLoginSubmit} >
                            <div className="card flex-shrink-0 w-96 border-[2px] bg-black bg-opacity-40 shadow-none border-slate-500    ">
                                <div className="card-body">
                                    <h1 className="text-3xl text-center text-white font-bold">Login</h1>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control mt-6">


                                        <button value=" login" type=' submit' className="btn text-white bg-black">Login</button>
                                    </div>
                                    <br />

                                         
                                </div>
                                <p className="font-bold text-center text-white">Do not have an account? <Link to="/register"> <span className=" text-red-500">register</span></Link></p>
                                <p className="text-center my-5 text-white font-bold">Sign in with <button onClick={handleGoogleSignin} className="btn bg-black text-white text-3xl font-bold"> <FcGoogle></FcGoogle>  </button></p>
                            </div>

                            

                        </form>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;