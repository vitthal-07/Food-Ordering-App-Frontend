import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Hero />
            <div className='container mx-auto flex-1 py-10'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
