import { Container, Row, Col } from "react-bootstrap";
import { FaBroom, FaBrush, FaArchive, FaAward } from "react-icons/fa";
import 'animate.css'; // Import animate.css

const VariantComponent = () => {
    return (
        <section className="varian-page">
            <Container>
                <Row className="text-center mb-4">
                    <Col>
                        <h1 className="display-4 fw-bold">Various Products that You Need</h1>
                        <div className="garis d-flex justify-content-center"></div>
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col lg="3" className="text-center">
                        <div className="icon-container animate__animated animate__fadeInUp">
                            <FaBroom className="display-4" />
                            <h5>Sapu</h5>
                        </div>
                    </Col>
                    <Col lg="3" className="text-center">
                        <div className="icon-container animate__animated animate__fadeInUp">
                            <FaBrush className="display-4" />
                            <h5>Sikat</h5>
                        </div>
                    </Col>
                    <Col lg="3" className="text-center">
                        <div className="icon-container animate__animated animate__fadeInUp">
                            <FaArchive className="display-4" />
                            <h5>Archive</h5>
                        </div>
                    </Col>
                    <Col lg="3" className="text-center">
                        <div className="icon-container animate__animated animate__fadeInUp">
                            <FaAward className="display-4" />
                            <h5>Award</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VariantComponent;