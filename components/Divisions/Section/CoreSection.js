/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react";
import CardDivisions from "./CardDivisions";
import axios from "axios"

export default function CoreSection() {
    const [Core, setCore] = useState([]);
    const getData = async () => {
        const Response = await axios.get('/api/data/divisions/core');
        let arr = []
        for (let i = 0; i < Response.data.length; i++) {
            if (i <= 1) {
                if (i === 0) {
                    arr.push([])
                    arr[0].push(Response.data[i])
                } else {
                    arr[0].push(Response.data[i])
                }
            } else {
                if ((i - 2) % 4 === 0) {
                    arr.push([])
                }
                arr[Math.floor((i - 2) / 4) + 1].push(Response.data[i])
            }
        }
        setCore(arr);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <Container fluid className="py-5">
            <Container className="py-5">
                <Row className="pb-5 justify-content-center">
                    <Row>
                        <Col lg={10} className="text-center m-auto">
                            <h1 className="pb-2 text-primary-sic" style={{ fontWeight: 800, fontSize: "48px" }}>SIC <span className="text-black-sic">Core</span></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10} className="text-center m-auto">
                            <p className="text-abu-sic" style={{ fontSize: "18px" }}>
                                The SIC Core is the backbone and the heart of the SIC organization. The Core also manages daily ops, plans strategy and implements the organization's vision, working with all units to ensure success, coordinates activities and optimizes resources.
                            </p>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    {Core.map((val, id) => {
                        return (
                            <Row className="justify-content-center align-items-end mx-auto" key = {id}>
                                {val.map((data, index) => {
                                    return (
                                        <Col lg={3} md={5} sm={7} xs={10} className="mb-5" key = {index}>
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
                                })}
                            </Row>
                        )
                    })}
                </Row>
            </Container>
        </Container>
    )
}