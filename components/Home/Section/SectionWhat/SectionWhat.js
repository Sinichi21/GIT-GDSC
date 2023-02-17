import Image from "next/legacy/image";
import { Container, Row, Col } from "react-bootstrap";

import style from 'styles/LandingPage.module.css';

export default function SectionWhat(){
    return(
        <Container fluid className = {`py-5 bg-white`}>
            <Container className = 'py-5'>
                <Row className = 'py-3'>
                    <Col 
                        lg = { 5 } md = { 6 } 
                        className = 'm-auto pb-md-0 pb-5'
                    >
                        <Image
                            src = "/assets/landing/what-section.svg"
                            alt = "img section what"
                            width = { 500 }
                            height = { 500 }
                            layout = 'responsive'
                        /> 
                    </Col>
                    <Col 
                        lg = { 6 } md = { 6 } 
                        className = 'm-auto text-center text-md-start'
                    >
                        <h1 
                            className = "pb-2" 
                            style = {{ fontWeight: 800, fontSize: "48px" }}
                        >
                            What is <span className = "text-primary-sic"> SIC?</span> 
                        </h1>
                        <Col 
                            lg = {10} 
                            style ={{ color: "#718096", fontSize: 18 }}
                        >
                        <p>
                            SIC is a community of Informatics students at Udayana University that focuses on developing intellectual insight, 
                            increasing expertise, and personal integrity by collaborating between members and communities who have an interest 
                            in information and communication technology.
                        </p>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}