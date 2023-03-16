import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Container , Navbar , Offcanvas } from 'react-bootstrap';
import NavLink from './NavLink';

import { motion } from 'framer-motion';

import style from 'styles/Navbar.module.css';

export default function NavigationBar() {
    const [isSticky , setSticky] = useState(false);
    const Year = new Date().getFullYear();

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
            fixed = "top" 
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
                
                <motion.div
                    whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    type='button'
                    style={{ border: 'none', backgroundColor: 'transparent' }}
                >
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" 
                        style = {{
                            border : 'none' ,
                            background : 'none' ,
                            outline : 'none' ,
                            boxShadow : 'none' ,
                            color : '#000' ,
                        }}
                    />
                </motion.div>
                <Navbar.Offcanvas 
                    id = 'offcanvasNavbar-expand-lg' 
                    aria-labelledby = 'offcanvasNavbarLabel-expand-lg' 
                    placement = "end"
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
                        <div className = "d-sm-none d-block text-center fixed-bottom p-3">
                            <small className = "text-muted">
                                &copy; { Year } SIC UNUD
                            </small>
                        </div>
                    </Offcanvas.Body>

                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}