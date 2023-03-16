import { useRouter } from 'next/router';
import { Nav } from 'react-bootstrap';

import { motion } from 'framer-motion';

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
            <motion.div
                whileHover={{ scale: 1 }}
                whileTap={ router.pathname == Path.home ? { scale: 1 } : { scale: 0.8 }}
                type='button'
            >
                <Nav.Link 
                    href = { Path.home } 
                    className={` ${router.pathname == Path.home ? style.active : style.secondary} pe-4 ps-3`}
                    id = 'nav-link'
                >
                    { pathName.home }

                </Nav.Link>
            </motion.div>
            
            <motion.div
                whileHover={{ scale: 1 }}
                whileTap={ router.pathname == Path.divisions ? { scale: 1 } : { scale: 0.8 }}
                type='button'
            >
                <Nav.Link 
                    href = { Path.divisions } 
                    className={` ${router.pathname == Path.divisions ? style.active : style.secondary} pe-4 ps-3`}
                    id = 'nav-link'
                >

                    { pathName.divisions }

                </Nav.Link>
            </motion.div>
            
            <motion.div
                whileHover={{ scale: 1 }}
                whileTap={ router.pathname == "/clubs/[id]" ? { scale: 1 } : { scale: 0.8 }}
                type='button'
            >
                <Nav.Link 
                    href = { Path.clubs } 
                    className={` ${router.pathname == "/clubs/[id]" ? style.active : style.secondary} pe-4 ps-3`}
                    id = 'nav-link'
                >

                    { pathName.clubs }

                </Nav.Link>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1 }}
                whileTap={ router.pathname == Path.faq ? { scale: 1 } : { scale: 0.8 }}
                type='button'
            >
                <Nav.Link 
                    href = { Path.faq } 
                    className={` ${router.pathname == Path.faq ? style.active : style.secondary} pe-4 ps-3`}
                    id = 'nav-link'
                >

                    { pathName.faq }

                </Nav.Link>
            </motion.div>
        </Nav>
    )
}
