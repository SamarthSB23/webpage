import Navbar from "./Navbar"
import Footer from "./Footer"
import { children } from "react";

const Layout = ({ children }) => {
    return (
        <div>
        <Navbar />
          { children }
        <Footer />
        </div>
    );
}
 
export default Layout;