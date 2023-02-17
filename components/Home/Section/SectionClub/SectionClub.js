import { Container, Col } from 'react-bootstrap';
import axios from 'axios';

import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import style from 'styles/LandingPage.module.css';

SwiperCore.use([Autoplay]);

export default function SectionClub() {
    const swiperRef = useRef(SwiperCore | null);

    const onInit = (SwiperCore) => {
        swiperRef.current = SwiperCore;
    }

    const handleMouseEnter = () => {
        if (swiperRef.current) swiperRef.current.autoplay.stop();
    };
    const handleMouseLeave = () => {
        if (swiperRef.current) swiperRef.current.autoplay.start();
    };

    const [Data, setData] = useState([]);

    const getData = async () => {
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


    return (
        <Container fluid className='py-5 px-0'>
            <Container className='pt-5'>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
                >
                    <div className='text-center'>
                        <h1
                            className='text-black-sic pb-3'
                            style={{
                                fontWeight: 800,
                                fontSize: "48px"
                            }}
                        >
                            Join Our <span className='text-primary-sic'> Club </span>
                        </h1>
                        <Col
                            lg={6}
                            className='m-auto'
                            style={{
                                fontSize: "18px",
                                color: "#718096"
                            }}
                        >
                            <p style={{ fontSize: "18px" }}>
                                Let’s join our club to strengthen the skills you are interested in in order to prepare yourself for the industrial field later.
                            </p>
                        </Col>
                    </div>
                </motion.div>
            </Container>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 200 }}
            >
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Swiper
                        onInit={onInit}
                        loop={true}
                        speed={4000}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        className='pb-5'
                        slidesPerView={3.2}
                        breakpoints={{
                            1400: { slidesPerView: 3.4, },
                            968: { slidesPerView: 2.4, },
                            768: { slidesPerView: 2.4, },
                            300: { slidesPerView: 1.1, }
                        }}
                    >
                        {
                            Data.map((datas, index) => {
                                return (
                                    <SwiperSlide key={index} className='me-3 me-lg-0'>
                                        <Link href={`/clubs/${datas.id}`}>
                                            <Col 
                                                lg={10} md = {10} sm = {8}
                                            >
                                                <Image
                                                    src={`/assets/landing/club/${datas.image}`}
                                                    alt={datas.nama}
                                                    width={100}
                                                    height={60}
                                                    layout='responsive'
                                                    className={`${style.img_club}`}
                                                />
                                            </Col>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
            </motion.div>
        </Container>
    )
}