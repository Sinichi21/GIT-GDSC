/* eslint-disable react/no-unescaped-entities */
import Image from "next/legacy/image";
import { motion } from "framer-motion";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function HeroClubs(){
    return(
        <Container 
            fluid 
            className = "d-flex justify-content-center align-items-center"
            style = {{ height: "80vh" }}
            id = "Home"
        >
            <Container>
                <Row>
                    <Col lg = {5} className = 'm-auto d-none d-lg-block'>
                        <motion.div
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
                        >
                            <Image 
                                src = "/assets/section/club/hero-club.svg"
                                alt = "Hero Club"
                                layout = "responsive"
                                width={550}
                                height={550}
                                priority
                            />
                        </motion.div>
                    </Col>
                    <Col lg = {5} className = 'm-auto text-sm-start'>
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
                        >
                            <Col lg = {10} className = 'pb-3'>
                        
                                <h1 
                                    className = 'text-black-sic' 
                                    style = {{ fontWeight: 800 }}
                                >
                                    Let's Find Your 
                                    <span className = 'text-primary-sic'> Interests </span> 
                                    and Hone Your 
                                    <span className = 'text-primary-sic'> Skills </span>
                                    Here!

                                </h1>
                            </Col>

                            <p className = 'text-secondary '>
                                SIC Club is a place to find out and develop potential through each club to prepare yourself in the industrial world. 
                                There are 9 clubs that you can join more than one. Now, SIC Club open to the public. It's time to learn together, 
                                discuss, and collaborate on what you are interested in. Swipe up for more information.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                style = {{ 
                                    backgroundColor: "#63A8E7", 
                                    border: "none" ,
                                    padding: "12px 40px",
                                    fontWeight: 600,
                                    borderRadius: "8px",
                                    color: "#FFFFFF"
                                }}
                            >
                                Join Us
                            </motion.button>
                                
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}