import Image from "next/legacy/image";
import { Button, Col, Container, Row } from "react-bootstrap";

import { motion } from "framer-motion";

import style from 'styles/LandingPage.module.css';

export default function HeroLandingPage(){
   

    return(
        <Container fluid 
            className = {` ${style.hero_landing_page} d-flex justify-content-center align-items-center `} 
            id = "Home"
        >
            <Container>
                <Row className = 'justify-content-between align-items-center '>
                    <Col lg = {8}>
                        <Col lg = {8}>
                            <motion.div 
                                initial = {{ opacity: 0, x : -100 }} 
                                whileInView = {{ opacity: 1, x : 0,}}  
                                transition={{ delay: 0.3 , duration: 0.6, type: "spring", stiffness: 200 }}
                            >
                                <h1 className = "pb-3">
                                    Achieve <span style = {{ fontWeight: 800 }}> Success </span> 
                                    Through <span style = {{ fontWeight: 800 }}>Development </span> 
                                    of <span style = {{ fontWeight: 800 }}> Intellectual Insight </span> 
                                    and Self-Capability
                                </h1>
                            </motion.div>
                            <motion.div 
                                initial = {{ opacity: 0, x : -100 }} 
                                whileInView = {{ opacity: 1, x : 0,}}  
                                transition={{ delay: 0.6 , duration: 0.6, type: "spring", stiffness: 200 }}
                            >
                                <p className = "pb-3">
                                    Innovating a connected future through developer studies. Empowering society through self-ability. 
                                    We are here to apply our capabilities in the field of information and communication technology to 
                                    create professionalism and integrity to present a future that is rich of knowledge.
                                </p>
                            </motion.div>
                            <motion.div 
                                initial = {{ opacity: 0, x : -100 }} 
                                whileInView = {{ opacity: 1, x : 0,}}  
                                transition={{ delay: 0.9 , duration: 0.6, type: "spring", stiffness: 200 }}
                            >
                                <a href="#WhatSic">
                                    <Button className = {` ${style.btn_hero_landing} `}>
                                        Explore
                                    </Button>
                                </a>
                            </motion.div>
                        </Col>
                    </Col>

                    <Col 
                        lg = {4} 
                        className = 'd-none d-lg-block'
                    >
                        <motion.div  
                            initial = {{ y : 0, x : 0 }}
                            animate = {{ y : 10 , x : 20 }}
                            transition={{  repeat: Infinity, duration: 1, repeatType: "reverse" }}
                        > 
                            <Image 
                                src = "/assets/landing/sic-logo-hero.png"
                                alt = "SIC LOGO HERO"
                                layout = 'responsive'
                                width = { 500 }
                                height = { 500 }
                                className = 'p-0'
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

