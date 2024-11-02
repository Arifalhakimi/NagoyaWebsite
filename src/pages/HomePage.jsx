import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from "../assets/img/webnagoya/gambar2.png";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// faqcompinent
import AboutComponent from '../components/AboutComponent';
import PenyebaranComponent from '../components/PenyebaranComponent';
import VariantComponent from '../components/VarianComponent';
// import { kelasTerbaru, } from "../data/index";
import { useNavigate } from "react-router-dom";
// import TestiComponent from '../components/TestiComponent';




const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage ">
      <header className=" d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6" className="text-container">
              <h3 className="mb-1 animate__animated animate__fadeInDown animate__delay-0.5s">
                Broom, Brush, Mop Product
              </h3>
              <h1 className="mb-2 animate__animated animate__fadeInDown animate__delay-0.7s">
                NAGOYA
              </h1>
              <p className="mb-4 animate__animated animate__fadeInDown animate__delay-0.9s">
                Kami selalu berusaha memberikan yang terbaik untuk pelangga n, karena kami sangat
                memperhatikan kualitas pelayanan, kualitas produk, dan kepuasan pelanggan.
              </p>
              <button className="btn btn-primary btn-lg rounded-pill me-2 animate__animated animate__fadeInUp animate__delay-1.2s fw-bold" onClick={() => navigate("")}>
                See All
              </button>
            </Col>
            <Col lg="6" className="image-hero d-flex justify-content-center">
              <img src={HeroImage} alt="hero-img" className="animate__animated animate__zoomIn animate__delay-1s img-fluid" />
            </Col>
          </Row>
        </Container>

      </header>
      {/* <div className="service w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Program</h1>
              <p className='text-center'>Mau Beramal Apa Hari Ini?</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return <Col key={kelas.id} className='shadow rounded-2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay} >
                <img src={kelas.image} alt="unsplash.com" className='w-100 mb-2 rounded-top' />
                <div className='alamatservice d-flex mt-2 justify-content-center align-items-center'>
                  <h4 className=' fw-bold '> {kelas.nama} </h4>
                </div>
                <div className='progress bg-white'>
                  <div className='progress-bar bg-sucsess'>10%</div>
                </div>

                <div className='detail d-flex justify-content-center'>
                  <div className='col-9 '>
                    <div className='icon-detail d-flex'>
                      <i className='bi bi-coin'></i>
                      <p>Terkumpul : {kelas.terkumpul}</p>
                    </div>
                    <div className='icon-detail d-flex'>
                      <i className='bi bi-calendar2-event'></i>
                      <p>Sisa Hari : {kelas.waktu}</p>
                    </div>
                  </div>
                  <div className='button-program col-3 btn-sm '>
                    <button className='btn btn-success rounded-5 '>Detail</button>
                    <button className='btn btn-success rounded-5 '>Donasi</button>
                  </div>
                </div>

              </Col>
            })}
          </Row>
          <Row>
            <Col className='text-center '>
              <button className='btn btn-success rounded-5 btn-lg ' data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/kelas")}>
                Lihat semua Program<i className='fa-solid fa-chevron-right ms-3' ></i></button>
            </Col>
          </Row>

        </Container>
      </div> */}
      <div className='home-page-component'>
        <AboutComponent />
        <PenyebaranComponent />
        <VariantComponent />
        {/* <TestiComponent /> */}
      </div>
    </div>
  )
}

export default HomePage