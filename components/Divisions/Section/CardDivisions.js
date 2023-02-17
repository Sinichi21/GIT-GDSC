import Image from "next/image";

import { Row, Col } from "react-bootstrap";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

import styles from "styles/Divisions.module.css";

export default function CardDivisions(props) {
    return (
        <div className="text-center justify-content-center align-items-center">
            <Col
                lg={5}
                md={6}
                sm={6}
                xs={6}
                className='m-auto pb-3'
            >
                <Image
                    src={`/assets/section/divisions/${props.img}`}
                    alt={props.nama}
                    layout="responsive"
                    width={0}
                    height={0}
                />
            </Col>
            <Col>
                <div className={`${styles.description} `}>
                    <h5 className="fw-bold my-auto text-black-sic" style={{ fontSize: '16px' }}>{props.nama}</h5>
                    <small className="my-auto text-abu-sic">{props.jabatan}</small>
                </div>

                <div className={`d-flex justify-content-center gap-4 fs-5`}>
                    <a href={`${props.instagram}`}><BsInstagram className="text-primary-sic" /></a>
                    <a href={`https://github.com/${props.github}`}><BsGithub className="text-primary-sic" /></a>
                    <a href={`${props.linkedin}`}><BsLinkedin className="text-primary-sic" /></a>
                </div>
            </Col>
        </div>
    );
}
