import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Default = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Default;