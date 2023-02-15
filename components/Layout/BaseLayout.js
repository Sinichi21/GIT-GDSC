import FooterComponent from "components/Footer/FooterComponent";
import NavigationBar from "components/Navbar/Navbar";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
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
                <a href = "#Home">
                    <Button 
                        className = 'position-fixed fs-4 py-2 px-3 text-white' 
                        style = {{ 
                            bottom: 10, 
                            right: 20, 
                            backgroundColor: "rgba(99, 168, 231, 0.7)", 
                            zIndex: "9999", 
                            border: "none"
                        }}
                        id = "scroll-to-top"
                    >
                        <BsArrowUp />
                    </Button>
                </a>
                { children }
            <FooterComponent />
        </>
    )
}