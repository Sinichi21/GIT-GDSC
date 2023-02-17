import Image from "next/legacy/image";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function HeroClubs(){
    return(
        <Container 
            fluid 
            className = "d-flex justify-content-center align-items-center"
            style = {{ height: "80vh" }}
        >
            <Container>
                <Row>
                    <Col lg = {5} className = 'm-auto d-none d-lg-block'>
                        <Image 
                            src = "/assets/section/club/hero-club.svg"
                            alt = "Hero Club"
                            layout = "responsive"
                            width={550}
                            height={550}
                            priority
                        />
                    </Col>
                    <Col lg = {5} className = 'm-auto text-center text-sm-start'>
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
                        <Button 
                            className = 'px-4 py-2' 
                            style = {{ backgroundColor: "#63A8E7", border: "none" }}
                        >
                            <span className = 'px-2'>
                                Join Us
                            </span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}