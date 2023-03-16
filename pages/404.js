import BaseLayout from "@/components/Layout/BaseLayout";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

export default function NotFound(){
    return(
        <>
            <Head>
                <title> SIC UNUD 2023 | 404 Not Found </title>
            </Head>

            <BaseLayout>
                <Container fluid className = 'py-5'>
                    <Container className = 'py-5'>
                       <Row className = 'justify-content-center py-5'>
                            <Col lg = { 8 } className = 'text-center'>
                                <Image 
                                    src = "/assets/404.png"
                                    layout = 'responsive'
                                    width = { 10 }
                                    height = { 6.5 }
                                    alt = "404 Image"
                                    priority
                                />
                                <div className = 'py-5'>
                                    <p className = 'fw-bold'>
                                        WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
                                    </p>
                                    <Link href = '/' replace>
                                        <motion.button 
                                            whileHover = {{ scale: 1.05 }}
                                            whileTap = {{ scale: 0.8 }}
                                            className = 'px-5 py-3 mt-2 rounded-pill text-white' 
                                            style = {{
                                                backgroundColor: "#4299E1", 
                                                border: 'none'
                                            }}
                                        >
                                            Go Back Home
                                        </motion.button>
                                    </Link>
                                </div>
                            </Col>
                       </Row>
                    </Container>
                </Container>
            </BaseLayout>
        </>
    )
}