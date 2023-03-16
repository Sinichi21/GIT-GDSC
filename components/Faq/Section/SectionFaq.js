import { useState, useEffect } from 'react';

import { Container, Row, Col, Accordion } from 'react-bootstrap';
import axios from 'axios';

import CardFaq from './CardFaq';

export default function SectionFaq() {
  const [faq, setFaq] = useState([]);

  const getFaq = async () => {
    try {
      const response = await axios.get('/api/data/faq');
      setFaq(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <Container fluid className='py-5'>
      <Container className='py-5'>
        <Accordion flush>
          <Row>
            <Col lg={6}>
              {
                faq.map((data, index) => {
                  return (
                    data.id % 2 === 1 ?
                      <CardFaq key={index} data={data} />
                      :
                      null
                  )
                })
              }
            </Col>
            <Col lg={6}>
              {
                faq.map((data, index) => {
                  return (
                    data.id % 2 === 0 ?
                      <CardFaq key = { index } data = { data } />
                      :
                      null
                  )
                })
              }
            </Col>
          </Row>
        </Accordion>
      </Container>
    </Container>
  );
}
