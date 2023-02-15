import Image from "next/legacy/image";
import { Container, Row, Col } from "react-bootstrap";

import { motion } from "framer-motion";

import style from 'styles/LandingPage.module.css';

export default function SectionWhat() {
    return (
        <Container fluid className={`py-5 bg-white`} id="WhatSic">
            <Container className='py-5'>
                <Row className='py-3'>
                    <Col
                        lg={5} md={6}
                        className='m-auto pb-md-0 pb-5'
                    >
                        <motion.div
                            initial = {{ y : -100, opacity: 0 }}
                            whileInView = {{ y : 0, opacity: 1 }}
                            transition={{ delay: 0.3 , duration: 0.6, type: "spring", stiffness: 200 }}
                        >
                            <Image
                                src="/assets/landing/what-section.svg"
                                alt="img section what"
                                width={500}
                                height={500}
                                layout='responsive'
                                priority
                            />
                        </motion.div>
                    </Col>
                    <Col
                        lg={5} md={6}
                        className='m-auto text-center text-md-start'
                    >
                        <motion.div
                            initial = {{ x : 100, opacity: 0 }}
                            whileInView = {{ x : 0, opacity: 1 }}
                            transition={{ delay: 0.6 , duration: 0.6, type: "spring", stiffness: 200 }}
                        >
                            <h1
                                className="pb-2"
                                style={{ fontWeight: 800, fontSize: "48px" }}
                            >
                                What is <span className="text-primary-sic"> SIC?</span>
                            </h1>
                        </motion.div>

                        <Col
                            style={{ color: "#718096", fontSize: 18 }}
                        >
                            <motion.div
                                initial = {{ x : 100, opacity: 0 }}
                                whileInView = {{ x : 0, opacity: 1 }}
                                transition={{ delay: 1 , duration: 0.6, type: "spring", stiffness: 200 }}
                            >
                                <p>
                                    SIC is a community of Informatics students at Udayana University that focuses on developing intellectual insight,
                                    increasing expertise, and personal integrity by collaborating between members and communities who have an interest
                                    in information and communication technology.
                                </p>
                            </motion.div>
                        </Col>
                        
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}