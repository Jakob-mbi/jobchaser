import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { inputTypes  } from "../Components/types";
const SIGNUP_URL = 'http://localhost:8000/user';



function SignUp() {
    const navigate = useNavigate();
    const form = useForm<inputTypes>();
    const { register, handleSubmit, formState, watch } = form;
    const { errors} = formState;
    const onSubmit = async (data:inputTypes) => {
        const user = data.email.toLowerCase();
        const firstName = data.firstname;
        const lastName = data.lastname;
        const pwd = data.password;
        try {
            const response = await fetch(SIGNUP_URL,{
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({firstName,lastName,user,pwd})
            });
            console.log(JSON.stringify(response))
            alert("You have successfully registered")
            navigate(`/`)
        } catch (error) {
            console.error(error)
        }
        
    };
    const WatchPassword = watch("password");

    return (
        <div className="containerLogin flex justify-center p-10">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-lg">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl  mb-10">
                    Sign up
                </h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-white" htmlFor="firstname">
                            First Name*
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                               id="firstname"  type="text"  {...register("firstname", { required: 'Firstname is required' })}/>
                        <p className="text-rose-300">{errors.firstname?.message}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="lastname">
                            Last Name*
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               id="lastname"  type="text"  {...register("lastname", { required: 'Lastname is required' })}/>
                        <p className="text-rose-300">{errors.lastname?.message}</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                            Email*
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               id="email"  type="email" 
                               {...register("email", {
                                   required: 'Email is required',
                                   pattern: {
                                       value: /^[a-zA-Z0-9.!#$%&'*+/=`^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                       message: "Invalid email format"
                                   }
                               })}/>
                        <p className="text-rose-300">{errors.email?.message}</p>
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="password">
                            Password*
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               id="password"  type="password"  {...register("password", { required: 'Password is required' })}/>
                        <p className="text-rose-300">{errors.password?.message}</p>
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="password2">
                            Confirm Password*
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               id="password2"  type="password" 
                               {...register("password2", {
                                   required: 'Password confirmation is needed',
                                   validate: (fieldValue) => {
                                       return (fieldValue === WatchPassword || "Passwords must be same")
                                   }
                               })}/>
                        <p className="text-rose-300">{errors.password2?.message}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-4 w-full">
                    <p className="text-sm font-light text-white text-center">
                        Already have an account? <Link className="font-medium text-white hover:underline " to="/login">Log in</Link>
                    </p>
                    <button className="focus:outline-none text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
