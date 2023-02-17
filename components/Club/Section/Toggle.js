import { useAccordionButton, Button, AccordionContext } from 'react-bootstrap';
import { useContext } from 'react';
import { motion } from 'framer-motion';

import style from 'styles/Club.module.css';

export default function Toggle({ children, eventKey, callback }){
    const { activeEventKey } = useContext(AccordionContext);
    
    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;
    
    return(
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type = 'button'
                className = {`${isCurrentEventKey ? style.btn_club : style.btn_club_idle} py-lg-3  fw-bold mb-1 mb-sm-2 rounded-pill`}
                onClick = { isCurrentEventKey ? null : decoratedOnClick }
        >
            { children }

        </motion.button>
    )
}