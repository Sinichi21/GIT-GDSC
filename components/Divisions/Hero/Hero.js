import { Container, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import style from 'styles/Divisions.module.css';

export default function Hero() {
    return (
        <Container fluid className={`${style.hero_division_page} d-flex justify-content-center align-items-center`} id="Home">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
                >
                    <Col lg={10} className='text-sm-center m-auto'>
                        <h1 className = 'pb-3 pb-sm-0'>
                            4 Divisions <span className='text-primary-sic'>1 Vision</span>
                        </h1>
                        <p>
                            The divisions within the SIC organization are sections with specific tasks and responsibilities, playing a crucial role in helping the SIC organization run smoothly. Although each division is distinct, we all work together and support each other to achieve our common goals. Each division is like a puzzle piece that forms a larger picture leading us towards a shared goal.
                        </p>
                    </Col>
                </motion.div>
            </Container>
        </Container>
    )
}