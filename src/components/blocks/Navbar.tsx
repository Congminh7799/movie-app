import Logo from "./Logo";
import Nav from "./Nav";


const Navbar = () => {
    return (
        <>
            <div className="flex h-full items-center px-[2rem]">
                <div className="basis-1/4">
                    <Logo />
                </div>
                <div className="basis-3/4 text-center">
                    <Nav />
                </div>
            </div>
        </>
    )
}

export default Navbar;