import { Container, Row, Col, Button } from 'react-bootstrap';
import ActivityCard from './ActivityCard';
import React from 'react';
import activity from 'data/Activity/Activity';

import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination]);

import style from 'styles/LandingPage.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function Activity() {
  const panjang = activity.length;

  return (
    <Container fluid className = {`py-5 text-white`}>
      <Container className = 'py-5'>
        <Row className = 'align-items-end justify-content-between'>
          
          <Col lg = {6}>
            <motion.div
              initial = {{ x : -100, opacity: 0 }}
              whileInView = {{ x : 0, opacity: 1 }}
              transition={{ delay: 0.2 , duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <h1 className='pb-2' 
                style = {{ 
                  fontWeight: '800', 
                  fontSize: '48px' 
                }}
              >
                SIC <span className='text-primary-sic'>Activity</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial = {{ x : -100, opacity: 0 }}
              whileInView = {{ x : 0, opacity: 1 }}
              transition={{ delay: 0.4 , duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <p>
                There are several activities that you can take part in to add and strengthen your skills.
                All existing activities have the same main goal, namely to share knowledge and experience
                in a particular field.
              </p>
            </motion.div>
          </Col>

          <Col lg = {5} className = 'd-flex justify-content-end gap-3'>
            <Button 
                className = 'swiper-prev fs-5' 
                style = {{ 
                  borderRadius: "100%", 
                  backgroundColor: "#63A8E7", 
                  border: "none" 
                }}
              >
                <BsChevronLeft  />
              </Button>
              <Button 
                className = 'swiper-next fs-5 rounded-circle' 
                style = {{  
                  backgroundColor: "#63A8E7", 
                  border: "none" 
                }}
              >
                <BsChevronRight  />
              </Button>
          </Col>

        </Row>
        <motion.div
            initial = {{ y: -100, opacity: 0 }}
            whileInView = {{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 , duration: 0.6, type: "spring", stiffness: 200 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween = {5}
            navigation={{
              // Navigation Custom Arrows
              prevEl: ".swiper-prev", // Classname of the previous button
              nextEl: ".swiper-next", // Classname of the next button
            }}
            className='mySwiper'
            breakpoints={{
              1400: { slidesPerView: 3.5,},
              968: { slidesPerView: 2.5,},
              768: { slidesPerView: 1.8,},
              300: { slidesPerView: 1.1,}
            }}
          >
            {
              activity.map((data, index) => {
                return (
                  
                  <SwiperSlide
                    key = { index }
                    className='d-flex justify-content-start align-items-center me-sm-0 pb-5'
                  >
                      <ActivityCard data = { data } />
                  </SwiperSlide>
                  
                );
              })
            }
          </Swiper>
        </motion.div>
      </Container>
    </Container>
  );
}
