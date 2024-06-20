import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {useContext} from "react"
import { Context } from "../App"
import { useForm } from "react-hook-form";

const SIGNUP_URL = 'http://localhost:8000/user';

function Signin(){
    const navigate = useNavigate();
    const { setIsSignIn} = useContext(Context);
    const form = useForm();
    const { register, handleSubmit, formState} = form;
    const { errors } = formState;

    const onSubmit = async (data) => {
        const user = data.email.toLowerCase();
        const pass = data.password;

        try {
            
            const response = await fetch(`${SIGNUP_URL}?user=${user}`)
            const matchUser = await response.json();
            if(matchUser[0].pwd == pass)
            {
                setIsSignIn(true)
                sessionStorage.clear()
                sessionStorage.setItem("currentUser", JSON.stringify(matchUser[0]));
                alert("You have successfully Sign In")
                navigate(`/`)
            }
            else
            {
                alert("You have the wrong password and/or email")
            }

        } catch (error) {
            console.error(error.message)
        }
        
    };
   
    return(
    <section >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       
            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@email.com" 
                              {...register("email", {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=`^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Invalid email format"
                                }
                            })}/>
                            <p className="text-rose-300">{errors.email?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                            {...register("password", { required: 'Password is required' })}/>
                            <p className="text-rose-300">{errors.password?.message}</p>
                        </div>

                        <button type="submit" className="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Log in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don´t have an account yet? <Link to="signup" className="font-medium text-primary-600 hover:underline ">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )

}

export default Signin