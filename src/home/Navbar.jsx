import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/_c382725a-1035-4b3b-8e32-92fe9d710720.jpeg"
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";



const Navbar = () => {

   const navigate= useNavigate()
    
    const {user,logOut} = useAuth()
    const handleLogout = () => {
        logOut()
            .then(() => { 
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged out successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate('/logIn')
                
            })
            .catch(error => console.log(error))
    }

    const navLinks =
        <>

            <li> <NavLink to='/'> Home</NavLink></li>
            <li> <NavLink to='addBlog'> Add Blog</NavLink></li>

            <li> <NavLink to='allBlog'>All Blog</NavLink></li>
            <li> <NavLink to='featuredBlogs'>Featured blogs</NavLink></li>
            <li> <NavLink to='wishList'>Wish List</NavLink></li>

        </>


    return (
        <div>
            <div className="navbar bg-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" text-black mt-10 menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/"> 
                    <div className="btn hidden lg:flex btn-ghost normal-case text-2xl font-sans font-bold">
                        <img className="w-16" src={logo}  />
                        <p>Awesome Blog</p>
                    </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal gap-5 text-black font-bold text-xl  px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    {user? 
                    <>   
                    <img className="w-14 rounded-full" src={user.photoURL} />
                    <p className="text-xl font-bold">{user.displayName}</p>
                    <button onClick={handleLogout} className="btn bg-black text-white">Logout</button>   
                    
                    </>
                    
                    
                    
                    :<>  
                    <Link to="/register"><button className="btn bg-black text-white">Sign up</button></Link>   
                    <Link to="/logIn"><button className="btn bg-black text-white">Log in</button></Link>   
                    
                    </>
                    }
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                        
                    </label>


                </div>

            </div>
        </div>
    );
};

export default Navbar;