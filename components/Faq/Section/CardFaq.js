import { Col, Accordion, Card, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { useContext } from 'react';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <>
      {children}
      <button
        type='button'
        style={{ border: 'none', backgroundColor: 'transparent', marginLeft: 'auto' }}
        onClick={decoratedOnClick}
      >
        {isCurrentEventKey ? (
          <img src='/assets/activity/min-button.svg' alt='' />
        ) : (
          <img src='/assets/activity/plus-button.svg' alt='' />
        )}
      </button>
    </>
  );
}

export default function CardFaq(props) {
  return (
    <Col lg={6}>
      <div className='mb-3'>
        <Card border='light' style={{ backgroundColor: '#F7FAFF' }}>
          <Card.Header
            className='d-flex align-items-center'
            style={{
              backgroundColor: 'inherit',
              border: '0px',
              fontWeight: '600',
              color: '#2D3748',
            }}
          >
            <ContextAwareToggle eventKey={props.data.id}>{props.data.question}</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={props.data.id}>
            <Card.Body style={{ color: '#718096' }}>{props.data.answer}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    </Col>
  );
}
