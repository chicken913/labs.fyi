import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFlaskVial, faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function NavBar() {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <nav className="bg-neutral-900 sticky top-0">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between">
                    {/* Left Side of NavBar */}
                    <div className="flex space-x-2">
                        {/* Logo */}
                        <div>
                            <a href="/" className="flex items-center font-sans font-bold text-2xl py-4 px-5 text-white hover:opacity-50">
                                <FontAwesomeIcon icon={faFlaskVial} className="w-10 h-10 mr-3"></FontAwesomeIcon>
                                <span>journal.fyi</span>
                            </a>
                        </div>

                        {/* Primary Nav */}
                        <div className="hidden md:flex items-center space-x-4 font-sans font-semibold text-2xl text-white">
                            <a href="/journal" className="py-4 hover:text-neutral-300">Journal</a>
                            <a href="/macros" className="py-4 hover:text-neutral-300">Macros</a>
                        </div>
                    </div>

                    {/* Secondary Nav */}
                    <div className="hidden md:flex items-center space space-x-2 px-5">
                        <a href="#" className="py-2 px-3 bg-white text-neutral-900 rounded font-sans font-semibold hover:bg-neutral-200">Sign Up</a>
                        <a href="#" className="py-2 px-3 bg-neutral-600 text-white rounded font-sans font-semibold hover:bg-neutral-700">Sign In</a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center text-white hover:opacity-50">
                        <button onClick={()=>handleClick()} className="mobile-menu-button">
                            {toggle ? 
                            <FontAwesomeIcon icon={faXmark} className="w-8 h-8 mr-3"></FontAwesomeIcon> 
                            : <FontAwesomeIcon icon={faBars} className="w-8 h-8 mr-3"></FontAwesomeIcon>
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {toggle && <div className="mobile-menu md:hidden">
                <a href="#" className="hover:bg-neutral-800 block px-4 py-4 text-white font-sans font-semibold">Sign Up</a>
                <a href="#" className="hover:bg-neutral-800 block px-4 py-4 text-white font-sans font-semibold">Sign In</a>
                <a href="/journal" className="hover:bg-neutral-800 block px-4 py-4 text-white font-sans font-semibold">Journal</a>
                <a href="/macros" className="hover:bg-neutral-800 block px-4 py-4 text-white font-sans font-semibold">Macros</a>
            </div>}
        </nav>
    )
}

export default NavBar;