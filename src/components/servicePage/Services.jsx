// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Style.css";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service16.png";
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { serviceAnim,serviceChildAnim } from '../../animations/animations';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Services() {
  return (
    <div id="Services" className="min-h-screen container mx-auto">
      <motion.div initial="hidden"
      variants={serviceAnim}
      whileInView="show" viewport={{
          margin:"100px"
      }} className="services-container">
        <h1 className="mb-4">Services</h1>
        <div className="services-row">
          <motion.div variants={serviceChildAnim} className="service-card border border-1 rounded-sm p-6">
            <img src={service1} />
            <h3>implant dentaire
            </h3>
            <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
          </motion.div>

          <motion.div variants={serviceChildAnim} className="service-card border border-1 rounded-sm p-6">
            <img src={service2} />
            <h3>L’orthodontie
            </h3>
            <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
          </motion.div>

          <motion.div variants={serviceChildAnim} className="service-card border border-1 rounded-sm p-6">
            <img src={service3} />
            <h3>Endodontie
            </h3>
            <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
          </motion.div>

        </div>

        <motion.div variants={serviceChildAnim} className="services-row">
          <motion.div variants={serviceChildAnim} className="service-card border border-1 rounded-sm p-6">
            <img src={service4} />
            <h3>Odontologie conservatrice
            </h3>
            <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
          </motion.div>

          <motion.div variants={serviceChildAnim} className="service-card border border-1 rounded-sm p-6">
            <img src={service5} />
            <h3>Prothèse
            </h3>
            <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
          </motion.div>

          <motion.div variants={serviceChildAnim} className="service-card border border-1 rounded-sm p-6">
            <img src={service6} />
            <h3>blanchiment dentaire
            </h3>
            <p> Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
          </motion.div>

        </motion.div>
        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            slidesPerView={'auto'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >

            <SwiperSlide >
              <div className="slide-container mx-auto">
                <div className="service-card">
                  <img src={service1} />
                  <h3>implant dentaire
                  </h3>
                  <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
                </div></div></SwiperSlide>
            <SwiperSlide >
              <div className="slide-container mx-auto">
                <div className="service-card">
                  <img src={service2} />
                  <h3>L’orthodontie
                  </h3>
                  <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
                </div></div></SwiperSlide>
            <SwiperSlide >
              <div className="slide-container mx-auto">
                <div className="service-card">
                  <img src={service3} />
                  <h3>Endodontie
                  </h3>
                  <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
                </div></div></SwiperSlide>
            <SwiperSlide >
              <div className="slide-container mx-auto">
                <div className="service-card">
                  <img src={service4} />
                  <h3>Odontologie conservatrice
                  </h3>
                  <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
                </div></div></SwiperSlide>
            <SwiperSlide >
              <div className="slide-container mx-auto">
                <div className="service-card">
                  <img src={service5} />
                  <h3>Prothèse
                  </h3>
                  <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
                </div></div></SwiperSlide>
            <SwiperSlide >
              <div className="slide-container mx-auto">
                <div className="service-card">
                  <img src={service6} />
                  <h3>blanchiment dentaire
                  </h3>
                  <p>Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.</p>
                </div></div></SwiperSlide>
          </Swiper></div>
      </motion.div>
    </div>
  );
}

export default Services;
