import { Container, Col } from 'react-bootstrap';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function SectionClub(){
    const [Data, setData] = useState([]);

    const getData = async() => {
        try {
            const Response = await axios.get('/api/data/club/landing-club');
            setData(Response.data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
      getData();
    }, [])
    
    
    return(
        <Container fluid className = 'py-5 px-0'>
            <Container className = 'pt-5'>
                <div className = 'text-center'>
                    <h1 
                        className = 'text-black-sic pb-3' 
                        style = {{ fontWeight: 800 }}
                    >
                        Join Our <span className = 'text-primary-sic'> Club </span>
                    </h1>
                    <Col 
                        lg = {6} 
                        className = 'm-auto' 
                        style = {{
                            fontSize: "18px", 
                            color: "#718096"
                        }}
                    >
                        <p>
                            Let’s join our club to strengthen the skills you are interested in in order to prepare yourself for the industrial field later.
                        </p>
                    </Col>
                </div>
            </Container>
                <Swiper
                    loop = { true }
                    autoplay = {{ 
                        delay: 1000,
                        pauseOnMouseEnter: true
                    }}
                    className = 'pb-5'
                    slidesPerView = { 3.2 }
                    breakpoints={{
                        1400: { slidesPerView: 3.5,},
                        968: { slidesPerView: 2.5,},
                        768: { slidesPerView: 1.8,},
                        300: { slidesPerView: 1.2,}
                    }}
                >
                    {
                        Data.map( (datas , index) => {
                            return(
                                <SwiperSlide key = { index }>
                                    <Link href = {`/clubs/${datas.id}`}>
                                        <Col lg = { 10 } className = 'text-center'>
                                            <Image 
                                                src = {`/assets/landing/club/${datas.image}`}
                                                alt = {datas.nama}
                                                width = { 100 } 
                                                height = { 65 }
                                                layout = 'responsive'
                                            />
                                        </Col>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                    
                </Swiper>
        </Container>
    )
}