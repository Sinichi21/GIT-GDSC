import { Container, Row, Col, Card } from "react-bootstrap";
import style from 'styles/LandingPage.module.css';

import { motion } from "framer-motion";

export default function SectionExisted(){
    return(
        <>
            <Container fluid className={`pb-5 ${style.section_why}`}>
                <Container className = 'pb-5'>
                    <Card className={`p-5 ${style.section_box_why} `}>
                        <Card.Body>
                            <motion.div
                                initial = {{ y : -100, opacity: 0 }}
                                whileInView = {{ y : 0, opacity: 1 }}
                                transition={{ delay: 0.2 , duration: 0.6, type: "spring", stiffness: 200 }}
                            >
                                <h1
                                    className="pb-2 text-center text-black-sic"
                                    style = {{ 
                                        fontWeight: 800, 
                                        fontSize: "48px" 
                                    }}
                                >
                                    Why SIC<span className="text-primary-sic"> Exists?</span>
                                </h1>
                                <p
                                    className = "pb-5 text-center"
                                    style = {{
                                        color: "#718096",
                                        fontSize: "18px",
                                    }}
                                >
                                    The following are the reasons why SIC exists as a community.
                                </p>
                            </motion.div>

                            <Row className = 'pt-4'>
                                <Col
                                    lg = {3}
                                    md = {6}
                                    sm = {6}
                                    className = {`${style.why_box}`}
                                >
                                    <motion.div 
                                        initial = {{ opacity: 0, y : -100 }} 
                                        whileInView = {{ opacity: 1, y : 0,}}  
                                        transition={{ delay: 0.4 , duration: 0.6, type: "spring", stiffness: 200 }}
                                    >
                                        <h2
                                            className = "text-primary-sic"
                                            style = {{ 
                                                fontWeight: 700, 
                                                fontSize: "32px" 
                                            }}
                                        >
                                            #1
                                        </h2>
                                        <p
                                            className = "pe-2"
                                            style = {{ 
                                                fontSize: "16px", 
                                                fontWeight: "500", 
                                                color: "#718096" 
                                            }}
                                        >
                                            Since 2006, we are here hand in hand to share knowledge and technological innovation to fellow community members.
                                        </p>
                                    </motion.div>
                                </Col>
                                <Col
                                    lg = {3}
                                    md = { 6}
                                    sm = { 6 }
                                    className={`${style.why_box}`}
                                >
                                    <motion.div 
                                        initial = {{ opacity: 0, y : -100 }} 
                                        whileInView = {{ opacity: 1, y : 0,}}  
                                        transition={{ delay: 0.6 , duration: 0.6, type: "spring", stiffness: 200 }}
                                    >
                                        <h2
                                            className="text-primary-sic"
                                            style = {{ 
                                                fontWeight: 700, 
                                                fontSize: "32px" 
                                            }}
                                        >
                                            #2
                                        </h2>
                                        <p
                                            className="pe-2"
                                            style = {{ 
                                                fontSize: "16px", 
                                                fontWeight: "500", 
                                                color: "#718096" 
                                            }}
                                        >
                                            SIC is here as a forum for learning together for the Udayana University informatics community on certain topics related to technology.
                                        </p>
                                    </motion.div>
                                </Col>
                                <Col
                                    lg = {3}
                                    md = { 6}
                                    sm = { 6 }
                                    className={`${style.why_box}`}
                                >
                                    <motion.div 
                                        initial = {{ opacity: 0, y : -100 }} 
                                        whileInView = {{ opacity: 1, y : 0,}}  
                                        transition={{ delay: 0.8 , duration: 0.6, type: "spring", stiffness: 200 }}
                                    > 
                                        <h2
                                            className="text-primary-sic"
                                            style = {{ 
                                                fontWeight: 700, 
                                                fontSize: "32px", 
                                                lineHeight: "28px" 
                                            }}
                                        >
                                            #3
                                        </h2>
                                        <p
                                            className="pe-2"
                                            style = {{ 
                                                fontSize: "16px", 
                                                fontWeight: "500", 
                                                lineHeight: "28px", 
                                                color: "#718096" 
                                            }}
                                        >
                                            SIC is present as a place to collaborate in making projects in various fields, especially in fields found in the industrial world.
                                        </p>
                                    </motion.div>  
                                </Col>
                                <Col
                                    lg = {3}
                                    md={6}
                                    sm={6}
                                >
                                    <motion.div 
                                        initial = {{ opacity: 0, y : -100 }} 
                                        whileInView = {{ opacity: 1, y : 0,}}  
                                        transition={{ delay: 1.0 , duration: 0.6, type: "spring", stiffness: 200 }}
                                    > 
                                        <h2
                                            className="text-primary-sic"
                                            style={{ fontWeight: 700, fontSize: "32px", lineHeight: "28px" }}
                                        >
                                            #4
                                        </h2>
                                        <p
                                            className="pe-2"
                                            style = {{ 
                                                fontSize: "16px", 
                                                fontWeight: "500", 
                                                lineHeight: "28px", 
                                                color: "#718096" 
                                            }}
                                        >
                                            SIC cooperates with other communities to carry out community service activities as a form of embodiment of the application of technological knowledge.
                                        </p>
                                    </motion.div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>
    )
}