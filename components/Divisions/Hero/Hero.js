import { Col, Container, Row } from "react-bootstrap";

import style from 'styles/Divisions.module.css';

export default function Hero(props) {
    return (
        <Container fluid className={`${style.hero_division_page} d-flex justify-content-center align-items-center pt-5 mb-5`}>
            <Container className="text-center mb-5">
                <h1>
                    4 Divisions <span style={{ color: "#63A8E7" }}>1 Vision</span>
                </h1>
                <p>
                    The divisions within the SIC organization are sections with specific tasks and responsibilities, playing a crucial role in helping the SIC organization run smoothly. Although each division is distinct, we all work together and support each other to achieve our common goals. Each division is like a puzzle piece that forms a larger picture leading us towards a shared goal.
                </p>
            </Container>
        </Container>
    )
}