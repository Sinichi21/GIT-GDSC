/* eslint-disable react/no-unescaped-entities */
import Image from "next/legacy/image";
import { Col, Container, Row } from "react-bootstrap";

import style from 'styles/Faq.module.css';

export default function HeroFaq() {
  return (
    <Container
      fluid
      className={` ${style.hero_faq} d-flex justify-content-center align-items-center `}
      id = "Home"
    >
      <Container className='pt-4'>
        <Row>
          <Col 
            lg = {{ span: 7, order: 'first' }} 
            xs={{ order: 'last' }} 
            className='m-auto py-lg-0 py-5'
          >
            <h1 className = "text-white fw-medium" style = {{ fontSize: "48px"}}>
              Frequently Asked <span style = {{fontWeight: 900}}>Question</span>
            </h1>
            <Col lg={10} className='py-3 lh-lg'>
              <p style={{ lineHeight: '1.5', fontSize: '18px' }}>
                You're still curious about SIC? You're in luck! The FAQ allows you to get answers to
                your questions. Let's find your question right here!
              </p>
            </Col>
          </Col>

          <Col 
            lg = {{ span: 5, order: 'last' }} 
            xs = {{ order: 'first' }} 
            className='text-center py-3 d-lg-block d-none'
          >
            <Image 
              src='/assets/faq/hero.svg' 
              alt='Hero FAQ' 
              width = {350} 
              height = {350} 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
