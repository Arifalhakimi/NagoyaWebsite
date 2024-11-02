import { Container, Row, Col } from "react-bootstrap";
import PenyebaranImage from "../assets/img/penyebaran.png";

const PenyebaranComponent = () => {
    return (
        <div className="penyebaran-page ">
            <Container>
                {/* Heading */}
                <Row className="headingtext text-center mb-4">
                    <Col className="heading-text">
                        <h1 className="display-4 fw-bold">Spreads Across 40+ Cities</h1>
                        <div className="garis d-flex justify-content-center"></div>
                    </Col>
                </Row>

                {/* Image */}
                <Row className="justify-content-center mb-5">
                    <Col className="text-center">
                        <img
                            src={PenyebaranImage}
                            alt="Penyebaran"
                            className=""
                        />
                    </Col>
                </Row>

                {/* Text and Button */}
                <Row className="text-body text-center mb-5">
                    <Col md={10} className="mx-auto">
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                            culpa sequi, natus pariatur aperiam praesentium, quas debitis
                            voluptatibus quis atque nostrum quisquam amet voluptatem a?
                        </p>
                        <button className="btn btn-danger rounded-pill px-4 mb-4">
                            Retailer List
                        </button>
                    </Col>
                </Row>

                {/* Icons and Numbers */}
                <Row className="gy-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Col lg={4} key={index} className="text-center">
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <i className="fas fa-motorcycle display-3 text-danger"></i>
                                <h1 className="ms-3 display-5 fw-bold">41</h1>
                            </div>
                            <h5>Cities Available Kleaner Products</h5>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PenyebaranComponent;
