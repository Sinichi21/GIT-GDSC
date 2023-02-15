import Image from "next/legacy/image";
import Link from "next/link";

import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import style from 'styles/LandingPage.module.css';

export default function SectionQuestion() {
    return (
        <Container fluid className={`py-5 ${style.section_question}`}>
            <Container className='pb-5'>
                <Row className='pb-5 align-items-end justify-content-center'>
                    <Col
                        lg={4} md={5}
                        className='pb-md-0 pb-5'
                    >
                        <motion.div
                            initial = {{ x : -100, opacity: 0 }}
                            whileInView = {{ x : 0, opacity: 1 }}
                            transition={{ delay: 0.3 , duration: 0.6, type: "spring", stiffness: 200 }}
                        >
                            <Image
                                src="/assets/landing/question-section.svg"
                                alt="img section what"
                                width={0}
                                height={0}
                                layout='responsive'
                                priority={true}
                            />
                        </motion.div>
                    </Col>
                    <Col
                        lg={6} md={7}
                        className={`text-center text-md-start ${style.question_box_text}`}
                    >
                        <motion.div
                            initial = {{ x : 100, opacity: 0 }}
                            whileInView = {{ x : 0, opacity: 1 }}
                            transition={{ delay: 0.5 , duration: 0.6, type: "spring", stiffness: 200 }}
                        >
                            <h1
                                style={{ fontWeight: 800, fontSize: "48px" }}
                            >
                                Any Question? <br />
                                <span className="text-primary-sic">
                                    Get Your Answer Here
                                </span>
                            </h1>
                        </motion.div>
                        <Col
                            style={{ color: "#718096", fontSize: 18, lineHeight: "28px", fontWeight: 500 }}
                        >
                            <motion.div
                                initial = {{ x : 100, opacity: 0 }}
                                whileInView = {{ x : 0, opacity: 1 }}
                                transition={{ delay: 0.7 , duration: 0.6, type: "spring", stiffness: 200 }}
                            >
                                <p>
                                    If you have a question about our community, you will find some answers to frequently asked questions about our community. If you still can’t find the answer to your question, you can ask it to our contact below and we’ll answer it ASAP.
                                </p>
                            </motion.div>
                        </Col>

                        <Link href='/Faq'>
                            <motion.div
                                initial = {{ x : 100, opacity: 0 }}
                                whileInView = {{ x : 0, opacity: 1 }}
                                transition={{ delay: 0.9 , duration: 0.6, type: "spring", stiffness: 200 }}
                            >
                            <Button className={`${style.btn_question} text-center m-auto`}>FAQ</Button>
                            </motion.div>
                        </Link>

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}