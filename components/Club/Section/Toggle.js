import { useAccordionButton, Button, AccordionContext } from 'react-bootstrap';
import { useContext } from 'react';

import style from 'styles/Club.module.css';

export default function Toggle({ children, eventKey, callback }){
    const { activeEventKey } = useContext(AccordionContext);
    
    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;
    
    return(
        <Button 
            className = {`${isCurrentEventKey ? style.btn_club : style.btn_club_idle} py-3 px-4 px-sm-0 fw-bold mb-1 mb-sm-2 rounded-pill`}
            type = "button"
            onClick = { isCurrentEventKey ? null : decoratedOnClick }
        >
            { children }

        </Button>
    )
}