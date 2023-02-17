import { Container, Row, Col } from "react-bootstrap";
import style from 'styles/Divisions.module.css';
import CardDivisions from "./CardDivisions";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DesignSection() {
    const [Design, setDesign] = useState([]);
    const getData = async () => {
        const Response = await axios.get('/api/data/divisions/design');
        console.log(Response)
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
                        <h1 className="pb-2 text-primary-sic" style={{ fontWeight: 800, fontSize: "48px" }}>Design <span className="text-black-sic">Division</span></h1>
                        <p className="text-abu-sic" style={{ fontSize: "18px" }}>The Design Division focuses on visual design and documentation of all SIC activities, reinforces organization identity and image through creativity and innovation, thus maintaining a positive image and credibility of the SIC organization.</p>
                    </Col>
                    {
                        Design.map((data) =>
                            data.id === 1 ?
                                <Col lg={12}>
                                    <Col lg={4} md={5} sm={7} xs={10} className="pb-5 m-auto">
                                        <CardDivisions
                                            img={data.img}
                                            nama={data.name}
                                            jabatan={data.position}
                                            instagram={data.sosmed.find((sosmed) => sosmed.id === 1)?.username}
                                            github={data.sosmed.find((sosmed) => sosmed.id === 2)?.username}
                                            linkedin={data.sosmed.find((sosmed) => sosmed.id === 3)?.username}
                                        />
                                    </Col>
                                </Col>
                                :
                                <Col lg={4} md={5} sm={7} xs={10} className="pb-5 m-auto">
                                    <CardDivisions
                                        img={data.img}
                                        nama={data.name}
                                        jabatan={data.position}
                                        instagram={data.sosmed.find((sosmed) => sosmed.id === 1)?.username}
                                        github={data.sosmed.find((sosmed) => sosmed.id === 2)?.username}
                                        linkedin={data.sosmed.find((sosmed) => sosmed.id === 3)?.username}
                                    />
                                </Col>
                        )
                    }
                </Row>
            </Container>
        </Container>
    )
}