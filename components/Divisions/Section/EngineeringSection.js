import { Container, Row, Col } from "react-bootstrap";
import CardDivisions from "./CardDivisions";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EngineeringSection() {
    const [Design, setDesign] = useState([]);
    const getData = async () => {
        const Response = await axios.get('/api/data/divisions/engineering');
        setDesign(Response.data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Container fluid className='pb-5'>
            <Container className='pb-5'>
                <Row>
                    <Col lg={10} className="pb-5 text-center m-auto">
                        <h1 className="pb-2 text-primary-sic" style={{ fontWeight: 800, fontSize: "48px" }}>Engineering <span className="text-black-sic">Division</span></h1>
                        <p className="text-abu-sic" style={{ fontSize: "18px" }}>The Engineering Division maintains tech and infrastructure systems to run effectively and efficiently, manages mini and immerse projects, manages the website, and facilitates SIC Clubs.</p>
                    </Col>
                    {
                        Design.map((data, index) => {
                                return data.id === 1 ?
                                    <Col lg={12} key={index}>
                                        <Col lg={3} md={5} sm={7} xs={10} className="pb-5 m-auto">
                                            <CardDivisions
                                                img={data.img}
                                                nama={data.name}
                                                jabatan={data.position}
                                                instagram={data.sosmed.find((sosmed) => sosmed.id === 1)?.username}
                                                github={data.sosmed.find((sosmed) => sosmed.id === 2)?.username}
                                                linkedin={data.sosmed.find((sosmed) => sosmed.id === 3)?.username} />
                                        </Col>
                                    </Col>
                                    :
                                    <Col lg={4} md={5} sm={7} xs={10} className="pb-5 m-auto" key={index}>
                                        <Col lg={9} className="m-auto">
                                            <CardDivisions
                                                img={data.img}
                                                nama={data.name}
                                                jabatan={data.position}
                                                instagram={data.sosmed.find((sosmed) => sosmed.id === 1)?.username}
                                                github={data.sosmed.find((sosmed) => sosmed.id === 2)?.username}
                                                linkedin={data.sosmed.find((sosmed) => sosmed.id === 3)?.username} />
                                        </Col>
                                    </Col>;
                        })
                    }
                </Row>
            </Container>
        </Container>
    )
}