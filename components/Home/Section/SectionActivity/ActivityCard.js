/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import style from 'styles/LandingPage.module.css';

// Component to return sliced text (read more, show less functionality) using hooks
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  
  return (
    <>
      <Card.Text
        style = {{ 
          fontSize: '16px', 
          fontWeight: '400', 
          lineHeight: '1.4',
          color: '#C7D3FC' 
        }}
      >
        { isReadMore ? text.slice(0, 130) + "......" : 
          <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            transition = {{ duration: 0.5 }}
          >
            { text }
          </motion.div>
        }
      </Card.Text>
      <div 
        className='d-flex justify-content-end'
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onClick = { toggleReadMore }
          style = {{ 
            fontSize: '12px', 
            fontWeight: '500' ,
          }}
          className = "text-white border-0 bg-transparent"
        >
          { isReadMore ? 'Show More' : 'Show Less' }
          { 
            isReadMore ? (
              <img className='ms-1' src='/assets/activity/show-more.png' alt = 'button more' />
            ) : (
              <img className='ms-1' src='/assets/activity/show-less.png' alt = 'button less' />
            )
          }
        </motion.button>
      </div>
    </>
  );
};

export default function ActivityCard(props) {
  return (
    <Card 
      className = { `${style.activity_card} p-4 ` }
    >
      <Card.Img 
        variant = 'top' 
        src = { `/assets/activity/${props.data.img}` } 
        alt = {props.data.title}
      />
      <Card.Body 
        className = 'px-0'
      >
        <Card.Title 
          style = {{ 
            fontSize: '24px', 
            fontWeight: '700' 
          }}
        >
          { props.data.title } 
          <span 
            className = 'ps-1'
            style = {{ 
              color: '#63A8E7' 
            }}
          >  
            { props.data.span } 
          </span>
        </Card.Title>

        <ReadMore> 
          { props.data.desc }
        </ReadMore>
      </Card.Body>
    </Card>
  );
}
