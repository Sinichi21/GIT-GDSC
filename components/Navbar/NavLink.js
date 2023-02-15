import { useRouter } from 'next/router';
import { Nav, NavDropdown } from 'react-bootstrap';

import style from 'styles/Navbar.module.css';

export default function NavLink() {
    const router = useRouter();

    const Path = {
        home : "/",
        clubs : "/clubs/1",
        divisions : "/Divisions",
        faq : "/Faq"
    }

    const pathName = {
        home : "Home",
        divisions : "Divisions",
        clubs : "SIC Clubs",
        faq : "FAQ"
    }

    return (
        <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link 
                href = { Path.home } 
                className={` ${router.pathname == Path.home ? style.active : style.secondary} pe-4 ps-3`}
                id = 'nav-link'
            >
                { pathName.home }

            </Nav.Link>

            <Nav.Link 
                href = { Path.divisions } 
                className={` ${router.pathname == Path.divisions ? style.active : style.secondary} pe-4 ps-3`}
                id = 'nav-link'
            >

                { pathName.divisions }

            </Nav.Link>

            {/* <NavDropdown 
                title = { pathName.divisions } 
                id = {`offcanvasNavbarDropdown-expand-lg`} 
                className={` ${router.pathname == "divisions" ? style.active : style.secondary} pe-4 ps-3`}
            >
                <NavDropdown.Item href="#action3">
                    SIC Core
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Division Engineering</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Division Tech & Dev</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Division Design </NavDropdown.Item>
                <NavDropdown.Item href="#action3">Division Growth </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link 
                href = { Path.clubs } 
                className={` ${router.pathname == "/clubs/[id]" ? style.active : style.secondary} pe-4 ps-3`}
                id = 'nav-link'
            >

                { pathName.clubs }

            </Nav.Link>

            <Nav.Link 
                href = { Path.faq } 
                className={` ${router.pathname == Path.faq ? style.active : style.secondary} pe-4 ps-3`}
                id = 'nav-link'
            >

                { pathName.faq }

            </Nav.Link>

        </Nav>
    )
}
