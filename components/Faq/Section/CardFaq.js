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

      <motion.button
        className = 'd-flex align-items-center justify-content-between w-100 align-items-center gap-3 px-0'
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        type='button'
        style={{ border: 'none', backgroundColor: 'transparent' }}
        onClick={decoratedOnClick}
      >
       <p className = 'my-auto text-start' 
          style = {{
            color: "#2D3748", 
            fontWeight: 600
          }}
        > 
          {children} 
        </p>
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
            style={{
              backgroundColor: 'inherit',
              border: '0px'
            }}
          >
            <ContextAwareToggle eventKey={props.data.id}>
                {props.data.question}
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
