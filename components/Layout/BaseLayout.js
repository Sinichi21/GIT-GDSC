import FooterComponent from "components/Footer/FooterComponent";
import NavigationBar from "components/Navbar/Navbar";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowUp, BsArrowUpShort } from "react-icons/bs";

export default function BaseLayout({ children }){
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1000) {
                document.getElementById("scroll-to-top").style.display = "block";
            } else {
                document.getElementById("scroll-to-top").style.display = "none";
            }
        });
    }, []);
    
    return(
        <>
            <NavigationBar />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}  
                    className = 'position-fixed fs-4 py-2 px-3 text-white rounded' 
                    style = {{ 
                        bottom: 10, 
                        right: 20, 
                        backgroundColor: "rgba(99, 168, 231, 0.7)", 
                        zIndex: "9999", 
                        border: "none"
                    }}
                    id = "scroll-to-top"
                    onClick = {() => window.scrollTo(0,0)}
                >
                    <BsArrowUp />
                </motion.button>

                <div style = {{ paddingTop: "4.4rem" }}>
                    { children }
                </div>
                
            <FooterComponent />
        </>
    )
}