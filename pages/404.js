import BaseLayout from "@/components/Layout/BaseLayout";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";

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
                                    width = { 20 }
                                    height = { 13 }
                                    alt = "404 Image"
                                />
                                <div className = 'py-5'>
                                    <p className = 'fw-bold'>
                                        WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
                                    </p>
                                    <Link href = '/'>
                                        <Button 
                                            className = 'px-5 py-3 mt-2 rounded-pill' 
                                            style = {{
                                                backgroundColor: "#4299E1", 
                                                border: 'none'
                                            }}
                                        >
                                            Go Back Home
                                        </Button>
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