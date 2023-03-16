import Image from "next/legacy/image";

import { Col, Container, Row } from "react-bootstrap";
import { BsFillEnvelopeFill, BsFillTelephoneFill, BsGeoFill, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function FooterComponent() {
    const Year = new Date().getFullYear();

    return (
        <Container fluid className='pt-5' style={{ backgroundColor: "#495375" }}>
            <Container className='pt-5'>

                <Row className='border-bottom pb-5 align-items-end'>
                    <Col lg={5} className='pb-5 pb-lg-0 '>
                        <Col lg={8} className='text-start'>
                            <Image
                                src="/assets/logo/sic-logo-white.svg"
                                alt="Logo Sic Footer"
                                width={200}
                                height={100}
                                className="pb-4 "
                                priority
                            />
                            <p className='text-white lh-md'>
                                A non-profit organization committed to finding the best way to share knowledge about technology.
                            </p>
                            <div className='d-flex justify-content-start align-items-center gap-3'>
                                <a 
                                    href="https://www.instagram.com/sic.unud/" 
                                    target = "_blank" 
                                    className = "text-white fs-4" 
                                    rel = "noreferrer"
                                >
                                    <BsInstagram />
                                </a>
                                <a 
                                    href="https://github.com/sic-unud" 
                                    target = "_blank" 
                                    className = "text-white fs-4" 
                                    rel = "noreferrer"
                                >
                                    <BsGithub />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/company/student-innovation-centre/" 
                                    target = "_blank" 
                                    className = "text-white fs-4" 
                                    rel = "noreferrer"
                                >
                                    <BsLinkedin />
                                </a>
                            </div>
                        </Col>
                    </Col>
                    <Col lg={7}>
                        <Row>
                            <Col lg={5} md={6} className='pb-5 pb-lg-0 text-start'>
                                <h4 className='fw-bold text-white pb-2'>
                                    Contact Us
                                </h4>
                                <Col lg={10} className='d-flex align-items-center gap-2 text-white pb-2'>
                                    <span className='fs-5'><BsFillTelephoneFill /></span>
                                    +62 857-3862-9295 (Ryan)
                                </Col>
                                <Col lg={10} className='d-flex align-items-center gap-2 text-white pb-2'>
                                    <span className='fs-5'><BsFillEnvelopeFill /></span>
                                    sic.udayana@gmail.com
                                </Col>
                                <Col lg={10} className='d-flex align-items-start gap-2 text-white pb-2'>
                                    <span className='fs-5'><BsGeoFill /></span>
                                    Sekretariat SIC. Gedung BD Lt. 2, Informatika FMIPA Udayana
                                </Col>
                            </Col>
                            <Col lg={5} md={6} className='pb-5 pb-lg-0 text-start'>
                                <Col lg={10}>
                                    <h4 className='fw-bold text-white pb-2'>
                                        Random Quote
                                    </h4>
                                    <i><q className='text-white'>
                                        The technology of today is the result of the imagination of yesterday.
                                    </q></i>
                                    <p className='pt-4 text-white'>
                                        - Carl Saganv
                                    </p>
                                </Col>
                            </Col>
                            <Col lg={2} md={6} className='pb-5 pb-lg-0 text-start'>
                                <h4 className='fw-bold text-white pb-2'>
                                    Join Us
                                </h4>
                                <Col
                                    lg={12} md={5} xs={5}
                                    className='m-lg-auto m-0'
                                >
                                    <Image
                                        src="/assets/footer/qr-code.svg"
                                        alt="QR CODE DISCORD"
                                        layout='responsive'
                                        width={100}
                                        height={100}
                                        priority
                                    />
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Awal footer lg sesuai desain */}
                {/* <Row className="pb-4">
                    <Col lg={5}>
                        <Col lg={8}>
                            <Image
                                src="/assets/logo/sic-logo-white.svg"
                                alt="Logo Sic Footer"
                                width={200}
                                height={60}
                            />
                        </Col>
                    </Col>
                    <Col lg={7} className='mt-auto'>
                        <Row>
                            <Col lg={5}>
                                <h4 className='fw-bold text-white text-start m-0'>Contact Us</h4>
                            </Col>
                            <Col lg={5}>
                                <h4 className='fw-bold text-white text-start m-0'>Random Quote</h4>
                            </Col>
                            <Col lg={2}>
                                <h4 className='fw-bold text-white text-start m-0'>Join Us</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='border-bottom pb-5'>
                    <Col lg={5}>
                        <Col lg={8} className='text-center text-lg-start'>
                            <p className='text-white lh-md'>
                                A non-profit organization committed to finding the best way to share knowledge about technology.
                            </p>
                            <div className='d-flex justify-content-center justify-content-lg-start align-items-center gap-3'>
                                <a href="#" className="text-white fs-4">
                                    <BsInstagram />
                                </a>
                                <a href="#" className="text-white fs-4">
                                    <BsGithub />
                                </a>
                                <a href="#" className="text-white fs-4">
                                    <BsLinkedin />
                                </a>
                            </div>
                        </Col>
                    </Col>
                    <Col lg={7}>
                        <Row>
                            <Col lg={5} className='text-center text-lg-start'>
                                <Col lg={10} className='d-flex justify-content-lg-start justify-content-center align-items-center gap-2 text-white pb-2'>
                                    <span className='fs-5'><BsFillTelephoneFill /></span>
                                    +62 857-3862-9295 (Ryan)
                                </Col>
                                <Col lg={10} className='d-flex justify-content-lg-start justify-content-center align-items-center gap-2 text-white pb-2'>
                                    <span className='fs-5'><BsFillEnvelopeFill /></span>
                                    sic.udayana@gmail.com
                                </Col>
                                <Col lg={10} className='d-flex justify-content-lg-start justify-content-center align-items-start gap-2 text-white pb-2'>
                                    <span className='fs-5'><BsGeoFill /></span>
                                    Sekretariat SIC. Gedung BD Lt. 2, Informatika FMIPA Udayana
                                </Col>
                            </Col>
                            <Col lg={5} className='pb-5 pb-lg-0 text-center text-lg-start'>
                                <Col lg={10}>
                                    <i><q className='text-white'>
                                        The technology of today is the result of the imagination of yesterday.
                                    </q></i>
                                    <p className='pt-3 text-white'>
                                        - Carl Saganv
                                    </p>
                                </Col>
                            </Col>
                            <Col lg={2} className='pb-5 pb-lg-0 text-center text-lg-start'>
                                <Col
                                    lg={12} md={5} xs={5}
                                    className='m-auto'
                                >
                                    <Image
                                        src="/assets/footer/qr-code.svg"
                                        alt="QR CODE DISCORD"
                                        layout='responsive'
                                        width={100}
                                        height={100}
                                    />
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row> */}
                {/* Akhir footer lg sesuai desain */}

                <footer className='text-center text-white py-4 '>
                    &copy; Student Innovation Centre All Rights Reserved. Website by SIC {Year}.
                </footer>

            </Container >
        </Container >
    )
}