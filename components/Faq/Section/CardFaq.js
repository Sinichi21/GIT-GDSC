/* eslint-disable @next/next/no-img-element */
import { Col, Accordion, Card, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { useContext } from 'react';
import { motion } from 'framer-motion';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <>
      {children}
      <motion.button
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1 }}
        type='button'
        style={{ border: 'none', backgroundColor: 'transparent', marginLeft: 'auto' }}
        onClick={decoratedOnClick}
      >
        {isCurrentEventKey ? (
          <img src='/assets/activity/min-button.svg' alt='icon min button' />
        ) : (
          <img src='/assets/activity/plus-button.svg' alt='icon plus button' />
        )}
      </motion.button>
    </>
  );
}

export default function CardFaq(props) {
  return (
    <Col >
      <div className='mb-3'>
        <Card border='light' style={{ backgroundColor: '#F7FAFF' }}>
          <Card.Header
            className='d-flex align-items-center gap-2'
            style={{
              backgroundColor: 'inherit',
              border: '0px',
              fontWeight: '600',
              color: '#2D3748',
            }}
          >
            <ContextAwareToggle eventKey={props.data.id}>
              <p className = 'my-auto'>
                {props.data.question}
              </p>
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={props.data.id}>
            <Card.Body className='p-list' style={{ color: '#718096' }} >
              {
               Array.isArray(props.data.answer) ? 
                  <ol>
                    {
                      props.data.answer.map((data, index) => {
                          return (
                            <li key = {index} >
                              {data.list}
                            </li> 
                          )
                        })
                    } 
                  </ol>
                :
                props.data.answer
              }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    </Col>
  );
}
