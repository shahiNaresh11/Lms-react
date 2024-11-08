import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';


function HomeLayout({ children }) {


    const dispatch = useDispatch();
    const navigate = useNavigate();



    // for checking if user is logged in
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    console.log(isLoggedIn)

    // for displaying the options acc to role 
    const role = useSelector((state) => state?.auth?.role);


    function changewidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';

    }
    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        changewidth();

    }

    function handleLogout() {
        e.preventDefault();

        // const res = await dispatch(logout());
        // if(res?.payload?.sucess)
        navigate("/")

    }

    return (
        <div className="min-h-[90vh] bg-gray-700">
            <div className="drawer absolute left-0 z-50 w-fit">

                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu
                            onClick={changewidth}
                            size={"32px"}
                            className='font-bold text-white m-4' />
                    </label>
                </div>
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className='menu p-4 w-48 h-[100%] sm:w-80 bg-base-100 text-base-content relative'>
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>

                        <li>
                            <Link to="/">home</Link>
                        </li>

                        {isLoggedIn && role == 'ADMIN' && (
                            <li>
                                <Link to="/admin/dashboard"> Admin dashboard </Link>
                            </li>

                        )}
                        <li>
                            <Link to="/course">All Course</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact Us</Link>
                        </li>

                        <li>
                            <Link to="/about">About Us</Link>
                        </li>

                        {!isLoggedIn && (

                            <div className="w-full flex mt-[422px] items-center justify-center space-x-4">
                                <Link to="/login" className="w-full">
                                    <button className="btn btn-primary px-4 py-1 font-semibold rounded-md w-full">
                                        Login
                                    </button>
                                </Link>

                                <Link to="/signup" className="w-full">
                                    <button className="btn btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                                        Signup
                                    </button>
                                </Link>
                            </div>


                        )}

                        {isLoggedIn && (

                            <div className="w-full flex mt-[432px] items-center justify-center space-x-4">
                                <Link to="/user/profile" className="w-full">
                                    <button className="btn btn-primary px-4 py-1 font-semibold rounded-md w-full">
                                        profile
                                    </button>
                                </Link>

                                <Link to="/logout" className="w-full">
                                    <button onClick={handleLogout} className="btn btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                                        logout
                                    </button>
                                </Link>
                            </div>


                        )}


                    </ul>


                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}
export default HomeLayout