import { Link } from "react-router-dom"
import {useContext} from "react"
import { Context } from "../App"
import { contextType } from "./types";

function Navbar()
{
    const context = useContext<contextType|null>(Context);
    function signOut()
    {
        sessionStorage.clear()
        context?.setIsSignIn(false)
    }

    return(
        <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-b-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/"  className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="public\jobchase-high-resolution-logo.png" className="h-16 rounded-lg" alt="Jobchase Logo" />
                    
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className=" w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex p-4 md:p-0 mt-4   bg-gray-50 md:flex-row space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                {context?.isLoggedInRef.current?
                <li>
                <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-gray-900 py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
                 onClick={signOut}>Sign Out</button>
                </li>  
                
                :<>
                    <li>
                    <Link to="signin" className=" bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Log in</Link>
                    </li>
                    <li>
                    <Link to="signup" className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-gray-900 py-2 px-4 border border-blue-500 hover:border-transparent rounded">Sign up</Link>
                    </li>
                </>
                
                }
                    
                    
                </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar