import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Await, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast"
import HomeLayout from "../Layouts/HomeLayouts";
import { createAccount } from "../Redux/Slices/AuthSlice";


function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [previewImage, setpreviewImage] = useState("");
    const [signupData, setsignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: "",

    });

    function handleUserInput(e) {

        const { name, value } = e.target;
        setsignupData({
            ...signupData,
            [name]: value
        })

    }

    function getImage(event) {
        event.preventDefault();
        const uploadImage = event.target.files[0];
        if (uploadImage) {
            setsignupData({
                ...signupData,
                avatar: uploadImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener("load", function () {
                console.log(this.result)
                setpreviewImage(this.result);

            })


        }


    }

    async function createNewAccount(event) {
        event.preventDefault();
        if (!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar) {
            toast.error("please fill all the details");
            return;

        }
        if (signupData.fullName.length < 5) {
            toast.error("Name should be at least of 5 chracters")
            return;

        }



        if (!signupData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            toast.error("Invalid email id");
            return;
        }

        if (!signupData.password.match(/^(?=.{6,16})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/)) {
            toast.error("Password should be 6-16 characters long with at least one special character");
            return;
        }


        const formData = new FormData();
        formData.append("fullName", signupData.fullName);
        formData.append("email", signupData.email);
        formData.append("password", signupData.password);
        formData.append("avatar", signupData.avatar);


        // dispatch create accout action
        const response = await dispatch(createAccount(formData));
        if (response.payload?.success) {
            navigate("/");
        } else {
            toast.error("Account creation failed. Please try again.");
        }


        setsignupData({
            fullName: "",
            email: "",
            password: "",
            avatar: "",


        });
        setpreviewImage("");


    }


    return (
        <HomeLayout>
            <div className="flex items-center justify-center min-h-screen w-full">
                <form noValidate onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-80 shadow-lg">
                    <h1 className="text-center text-2xl font-bold">Registration Page</h1>

                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto " src={previewImage} />
                        ) : (<BsPersonCircle className="w-24 h-24 rounded-full m-auto" />

                        )}


                    </label>

                    <input
                        onChange={getImage}
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png , .svg"

                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor=" fullName" className="font-semibold">Name</label>
                        <input
                            type="text"
                            required
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your fullName"
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={signupData.fullName}

                        />
                    </div>

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
                            value={signupData.email}

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
                            value={signupData.password}

                        />
                    </div>

                    <button type="subbmit" className="w-full  mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 py-2 font-semibold text-lg cursor-pointer ">
                        Create Account
                    </button>

                    <p className="text-center">
                        Already have account? <Link to='/login' className="link text-accent cursor-pointer" > login </Link>
                    </p>

                </form>
            </div>
        </HomeLayout>
    );
}

export default SignUp;
