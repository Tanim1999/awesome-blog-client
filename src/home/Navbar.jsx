import { NavLink } from "react-router-dom";


const Navbar = () => {

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
            {navLinks}
        </div>
    );
};

export default Navbar;