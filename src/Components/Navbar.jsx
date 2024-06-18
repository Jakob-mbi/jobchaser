import { Link } from "react-router-dom"

function Navbar()
{
    return(
        <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-b-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/"  className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="public\jobchase-high-resolution-logo.png" className="h-16 rounded-lg" alt="Jobchase Logo" />
                    
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                <li>
                    <Link href="#" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log in</Link>
                    </li>
                    <li>
                    <Link to="signup" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-gray-900 py-2 px-4 border border-blue-500 hover:border-transparent rounded">Sign up</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar