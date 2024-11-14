import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast"
import HomeLayout from "../Layouts/HomeLayouts";
import { login } from "../Redux/Slices/AuthSlice";


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [loginData, setloginData] = useState({

        email: "",
        password: "",
        avatar: "",

    });

    function handleUserInput(e) {

        const { name, value } = e.target;
        setloginData({
            ...loginData,
            [name]: value
        })

    }



    async function onLogin(event) {
        event.preventDefault();
        if (!loginData.email || !loginData.password) {
            toast.error("please fill all the details");
            return;

        }




        // dispatch create accout action
        const response = await dispatch(login(loginData));
        if (response.payload?.success) {
            navigate("/");
        } else {
            toast.error("Account creation failed. Please try again.");
        }


        loginData({
            email: "",
            password: "",



        });


    }


    return (
        <HomeLayout>
            <div className="flex items-center justify-center min-h-screen w-full">
                <form noValidate onSubmit={onLogin} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-80 shadow-lg">
                    <h1 className="text-center text-2xl font-bold">Login Page</h1>


                    <div className="flex flex-col gap-1">
                        <label htmlFor="email " className="font-semibold">Email</label>
                        <input
                            type="email"
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={loginData.email}

                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password " className="font-semibold">Password</label>
                        <input
                            type="Password"
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your Password"
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={loginData.password}

                        />
                    </div>

                    <button type="subbmit" className="w-full  mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 py-2 font-semibold text-lg cursor-pointer ">
                        Login Account
                    </button>

                    <p className="text-center">
                        Don't have account? <Link to='/signup' className="link text-accent cursor-pointer" > Sign up </Link>
                    </p>

                </form>
            </div>
        </HomeLayout>
    );
}

export default Login;
