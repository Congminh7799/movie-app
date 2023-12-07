import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
    const navLinks = [
        { href: "", label: "Home" },
        { href: "popular", label: "Popular" }
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className="flex justify-between items-center max-container flex-row-reverse lg:flex-row">

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-white font-bold">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link to={item.href}>
                                <p className="hover:text-sky-400">{item.label}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-2 text-lg leading-normal font-medium text-white font-montserrat max-lg:hidden wide:mr-24">
                    <Link to={'login'}>
                        <p className="hover:text-sky-400">Login</p>
                    </Link>
                    <span>/</span>
                    <Link to={'signup'}>
                        <p className="hover:text-sky-400">Signup</p>
                    </Link>
                </div>
                <div
                    className="hidden max-lg:block cursor-pointer"
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                    }}
                >
                    <RxHamburgerMenu className="text-4xl" />
                </div>
            </nav>
            {isMenuOpen && (
                <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
                    <div
                        className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                        <AiOutlineClose className="text-4xl" />
                    </div>
                    <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <Link to={item.href}>
                                    <p className="hover:text-sky-400">{item.label}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    )
}

export default Nav;