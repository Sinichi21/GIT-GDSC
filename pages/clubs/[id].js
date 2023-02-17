import HeroClubs from "@/components/Club/Hero/Hero";
import BaseLayout from "@/components/Layout/BaseLayout";

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import axios from "axios";

import ClubLeadCard from "@/components/Club/Section/ClubLeadCard";
import CardTools from "@/components/Club/Section/CardTools";
import Toggle from "@/components/Club/Section/Toggle";

import style from 'styles/Club.module.css';
import { Col, Container, Row, Accordion } from "react-bootstrap";

export default function SicClubs() {
    const router = useRouter();
    const { id } = router.query;

    const [Club, setDataClub] = useState([]);

    const getDetailClub = async () => {
        const Response = await axios.get('/api/data/club/club');
        setDataClub(Response.data);
    }

    useEffect(() => {
        if(id) {
            getDetailClub();
        }
        
    }, [id]);

    return (
        <>
            <Head>
                <title> SIC UNUD 2023 | SIC Clubs </title>
            </Head>

            <BaseLayout>
                <HeroClubs />

                <Container fluid className='pb-5'>
                    <Container className='pb-5'>
                        <Accordion defaultActiveKey = { id || "1" }>
                            <Row className='align-items-start'>
                                <Col
                                    lg={4}
                                    className={`${style.coloumn_club} pb-5 pb-sm-0`}
                                >
                                    <div className={`${style.coloumn_club_child} ps-lg-5 pb-lg-5 d-flex gap-4 gap-md-4 d-lg-block`}>
                                        {
                                            Club.map((data, index) => {
                                                return (
                                                    <div key={index}>
                                                        <Toggle eventKey={data.key}>
                                                            {data.clubs}
                                                        </Toggle>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>

                                </Col>

                                <Col
                                    lg={8}
                                    className={`px-sm-5 pb-5 ${style.coloumn_lead_card}`}
                                >
                                    <div className="px-4">
                                        {
                                            Club.map((data, index) => {
                                                return (
                                                    <Accordion.Collapse eventKey={data.key} key={index}>
                                                        <div>
                                                            <ClubLeadCard
                                                                img={data.img}
                                                                nama={data.nama}
                                                                phone={data.phone}
                                                                line={data.line}
                                                            />

                                                            <p className='py-4 text-secondary lh-lg text-center text-sm-start'>
                                                                {data.caption}
                                                            </p>

                                                            <Row className='pb-5'>
                                                                {
                                                                    data.tools.map((tools) => {
                                                                        return (
                                                                            <CardTools
                                                                                name={tools.name}
                                                                                img={`/assets/club/${tools.img}`}
                                                                                key={tools.id}
                                                                            />
                                                                        );
                                                                    })
                                                                }
                                                            </Row>
                                                        </div>
                                                    </Accordion.Collapse>
                                                );
                                            })
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Accordion>
                    </Container>
                </Container>
            </BaseLayout>
        </>

    )
}