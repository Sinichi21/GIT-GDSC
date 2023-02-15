import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Container , Navbar , Offcanvas } from 'react-bootstrap';
import NavLink from './NavLink';

import style from 'styles/Navbar.module.css';

export default function NavigationBar() {
    const [isSticky , setSticky] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
        }
        window.addEventListener('scroll' , scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
        
    },[]);

    return (
        <Navbar 
            key = "md" 
            expand="md" 
            sticky = "top" 
            className = {`p-0 bg-white border-bottom ${isSticky ? 'border-bottom' : ''}`}
        >
            <Container>
                <Navbar.Brand href="/" className = 'p-0 my-auto'>
                    <Image 
                        src = '/assets/logo/sic-logo.svg' 
                        width = '100' 
                        height = '70' 
                        alt = 'logo sic unud' 
                        className = 'p-0' 
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls = 'offcanvasNavbar-expand-lg' />

                <Navbar.Offcanvas 
                    id = 'offcanvasNavbar-expand-lg' 
                    aria-labelledby = 'offcanvasNavbarLabel-expand-lg' 
                    placement="end" 
                    className = {style.mobile_navbar}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id = 'offcanvasNavbarLabel-expand-lg'>
                            <Image 
                                src = '/assets/logo/sic-logo.svg' 
                                width = '80' 
                                height = '80' 
                                alt = 'logo sic unud' 
                            />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    
                    <Offcanvas.Body>
                        <NavLink />
                    </Offcanvas.Body>

                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    );
}