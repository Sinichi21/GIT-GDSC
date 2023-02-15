import Image from "next/legacy/image";
import { Col } from "react-bootstrap";

import style from 'styles/Club.module.css';

export default function CardTools(props) {
    return (
        <Col
            lg={2}
            md={4}
            sm={3}
            xs={4}
            className='text-center mb-4 p-2'
            key={props.id}
        >
            <div className={`${style.card_tools} bg-white rounded px-sm-2 px-1 py-2`}>
                <Image
                    src={props.img}
                    layout='responsive'
                    width={50}
                    height={50}
                    alt={props.name}
                    className='p-sm-3 p-2'
                />
                <small className={style.text_tools}>
                    {props.name}
                </small>
            </div>
        </Col>
    )
}