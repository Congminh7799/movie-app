import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Container from "../blocks/Container";

const Default = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default Default;