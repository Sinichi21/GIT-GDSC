import FooterComponent from "components/Footer/FooterComponent";
import NavigationBar from "components/Navbar/Navbar";

export default function BaseLayout({ children }){
    return(
        <>
            <NavigationBar />
                { children }
            <FooterComponent />
        </>
    )
}