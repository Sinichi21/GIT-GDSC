import Image from "next/legacy/image";

import { Button, Col, Row } from "react-bootstrap";
import { BsWhatsapp, BsLine } from 'react-icons/bs';

import style from 'styles/Club.module.css';

export default function ClubLeadCard( props ){

    function FormatPhoneNumber( phone ){
        const code = "62";
        return(code + phone.slice(1));
    }
    
    return(
        <Row className = 'pt-4 pt-lg-0 pb-3'>
            <Col  
                lg = { 3 }
                md = { 5 }
                xs = { 8 }
                className = 'm-auto m-lg-0'
            >
                <Image 
                    src = {`/assets/section/club/${props.img}`}
                    alt = { props.nama }
                    layout = 'responsive'
                    width = { 0 }
                    height = { 0 }
                />
            </Col>
            
            <Col 
                lg = { 9 }
                md = { 12 }
                className = 'm-auto'
            >
                <h5 className = "fw-bold text-black-sic text-center text-lg-start pb-md-2">
                    { props.nama }
                </h5>

                <div className = 'd-block text-center d-sm-flex justify-content-md-center justify-content-lg-start align-items-center gap-2 text-secondary pb-3'>
                        <a href = {`https://api.whatsapp.com/send?phone=${ FormatPhoneNumber(props.phone) }`} 
                            className = 'text-decoration-none ps-sm-0 ps-2'
                            target = "_blank" rel="noreferrer"
                        >
                            <div className = "d-flex gap-2 justify-content-center align-items-center text-primary-sic">
                                <BsWhatsapp className = "me-sm-0" />
                                { props.phone }
                            </div>
                        </a>

                    <p className = 'my-auto d-none d-sm-block'> | </p>

                    <div className = 'd-flex gap-2 justify-content-center align-items-center mt-sm-0 mt-2'> 
                        <BsLine/>
                        <span className = "me-sm-0">
                            { props.line }
                        </span>
                    </div>
                </div>

                <div className = 'text-center text-lg-start'>
                    <button className = {`${style.btn_club_lead} px-lg-4 px-5 py-2 rounded-pill`}>
                        Leader
                    </button>
                </div>

            </Col>
        </Row>
    )
}