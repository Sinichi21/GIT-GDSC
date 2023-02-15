import { useEffect, useState } from "react";

import axios from 'axios';
import { Col, Container, Row, Accordion } from "react-bootstrap";

import Toggle from './Toggle';
import ClubLeadCard from './ClubLeadCard';
import CardTools from './CardTools';

import style from 'styles/Club.module.css';

export default function ClubSection() {
    const [Club, setDataClub] = useState([]);
    
    const getDetailClub = async() => {
        const Response = await axios.get('/api/data/club/club');
        setDataClub(Response.data);
    }

    useEffect(() => {
        getDetailClub();
        
    },[])

    return (
        <Container fluid className = 'pb-5'>
            <Container className = 'pb-5'>

                <Accordion defaultActiveKey = "0">
                    <Row className = 'align-items-start'>
                        <Col 
                            lg = {4} md = { 4 }
                            className={`${style.coloumn_club} `}
                        >
                            <div className = {`${style.coloumn_club_child} px-sm-5 pb-sm-5 d-flex d-sm-block`}>
                                {
                                    Club.map((data, index) => {
                                        return(
                                            <div key = { index  }>
                                                <Toggle eventKey = { data.key }>
                                                    { data.clubs }
                                                </Toggle>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            
                        </Col>

                        <Col 
                            lg = { 8 } md = { 8 }
                            className = 'px-sm-5'
                        >
                            <div className = 'px-4'>
                                {
                                    Club.map(( data, index ) => {
                                        return(
                                            <Accordion.Collapse eventKey = { data.key } key = { index }>
                                                <div>
                                                    <ClubLeadCard
                                                        img = { data.img }
                                                        nama = { data.nama }
                                                        phone = { data.phone }
                                                        line = { data.line }
                                                    />

                                                    <p className = 'py-4 text-secondary lh-lg text-center text-sm-start'>
                                                        { data.caption }
                                                    </p>

                                                    <Row className = 'pb-5'>
                                                        {
                                                            data.tools.map(( tools ) => {
                                                                return(
                                                                    <CardTools 
                                                                        name = { tools.name } 
                                                                        img = {`/assets/club/${ tools.img }`} 
                                                                        key = { tools.id }
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
    )
}
