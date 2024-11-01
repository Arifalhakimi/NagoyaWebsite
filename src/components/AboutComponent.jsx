import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageAbout from "../assets/img/sapu.jpg";
const AboutComponent = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleFullText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="about-component">
            <Container>
                {/* <Row>
                    <Col>
                        <h1 className="fw-bold ">Tentang Kami</h1>
                    </Col>
                </Row> */}
                <Row className="my-4 mx-2">
                    <Col lg={4} className="image-about">
                        <img src={ImageAbout} alt="About" className="img-fluid" data-aos="fade-up" data-aos-duration="1000" />
                    </Col>
                    <Col lg={8} className='text-about'>
                        <h1 className='judul-text fw-bold'>
                            Membawa keseimbangan alam ke lingkungan Anda.
                        </h1>
                        <p className={`about-text ${showFullText ? 'full-text' : ''}`} data-aos="fade-up" data-aos-duration="1000" >
                            Kami senantiasa berinovasi untuk menciptakan solusi kebersihan yang lebih baik, dengan mengutamakan kualitas produk, keberlanjutan lingkungan, serta kepuasan pelanggan.
                        </p>
                        <button className="btn btn-outline-primary btn-lg rounded-pill mr-8 me-2 animate__animated animate__fadeInUp animate__delay-1.2s fw-bold" >
                            See All
                        </button>
                    </Col>
                </Row>
                <Row className="my-5 mx-2">
                    <Col lg={8} className='text-about'>
                        <h1 className='judul-text fw-bold'>
                            Membawa keseimbangan alam ke lingkungan Anda.
                        </h1>
                        <p className={`about-text ${showFullText ? 'full-text' : ''}`} data-aos="fade-up" data-aos-duration="1000" >
                            Kami senantiasa berinovasi untuk menciptakan solusi kebersihan yang lebih baik, dengan mengutamakan kualitas produk, keberlanjutan lingkungan, serta kepuasan pelanggan.
                        </p>
                        <button className="btn btn-outline-primary btn-lg rounded-pill mr-8 me-2 animate__animated animate__fadeInUp animate__delay-1.2s fw-bold" >
                            See All
                        </button>
                    </Col>
                    <Col lg={4} className="image-about">
                        <img src={ImageAbout} alt="About" className="img-fluid" data-aos="fade-up" data-aos-duration="1000" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutComponent;
