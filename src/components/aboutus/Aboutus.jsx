// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Style.css";
import dc1 from "../../assets/dc1.png";
import dc2 from "../../assets/dc2.png";
import dc3 from "../../assets/dc3.png";
import cl1 from "../../assets/cl1.png";
import { Navigation, EffectCoverflow, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { motion } from 'framer-motion'
function Aboutus() {
    return (
        <motion.div initial={{opacity:0,x:"-100%"}} whileInView={{
            opacity:1,
            x:0
          }} transition={{duration:1,ease:"easeOut"}} id="Aboutus" className="container mx-auto ">
            <h1 className="aboutus-title" >About Us</h1>
            <div className="doctors-container">
                <h3 className="doctors-title">Our Doctors</h3>
                <div className="swiper-doctors">
                    <Swiper
                        modules={[Navigation, EffectCoverflow, Pagination, Scrollbar, A11y]}
                        effect={'coverflow'}
                        navigation={true}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 10,
                                slideShadows: false

                            }
                        }
                        slidesPerView={"auto"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                    >

                        <SwiperSlide >
                            <div className="slide-doctor w-full">
                                <div className="doctor-card w-full">
                                    <img src={dc1} />
                                    <div className="doctor-text">
                                        <h2>Khaled Harous</h2>
                                        <h3>Doctor</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis.</p>
                                    </div>
                                </div></div></SwiperSlide>
                        <SwiperSlide >
                            <div className="slide-doctor">
                                <div className="doctor-card w-full">
                                    <img src={dc2} />
                                    <div className="doctor-text">
                                        <h2>Khaled Harous</h2>
                                        <h3>Doctor</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis.</p>
                                    </div>
                                </div></div></SwiperSlide>
                        <SwiperSlide >
                            <div className="slide-doctor">
                                <div className="doctor-card w-full ">
                                    <img src={dc3} />
                                    <div className="doctor-text">
                                        <h2>Khaled Harous</h2>
                                        <h3>Doctor</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis.</p>
                                    </div>
                                </div></div></SwiperSlide>
                    </Swiper></div>
            </div>
            <motion.div initial={{opacity:0,y:100}} whileInView={{
                opacity:1,
                y:0
              }} transition={{duration:1,ease:"easeOut"}} className="clinic-container">
                <h3>Our clinic</h3>
                <div className="swiper-clinic">
                    <Swiper
                        modules={[Navigation, EffectCoverflow, Pagination, Scrollbar, A11y]}
                        effect={'coverflow'}
                        navigation={true}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 10,
                                slideShadows: false

                            }
                        }
                        slidesPerView={'3'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >

                        <SwiperSlide >
                            <div className="slide-clinic">
                                <div className="clinic-card">
                                    <img src={cl1} />
                                </div></div></SwiperSlide>
                        <SwiperSlide >
                            <div className="slide-clinic">
                                <div className="clinic-card">
                                    <img src={cl1} />
                                </div></div></SwiperSlide>
                        <SwiperSlide >
                            <div className="slide-clinic">
                                <div className="clinic-card">
                                    <img src={cl1} />
                                </div></div></SwiperSlide>
                        <SwiperSlide >
                            <div className="slide-clinic">
                                <div className="clinic-card">
                                    <img src={cl1} />
                                </div></div></SwiperSlide>
                    </Swiper></div>


                    <div className="swiper-clinic1">
                    <Swiper
                        modules={[Navigation, EffectCoverflow, Pagination, Scrollbar, A11y]}
                        effect={'coverflow'}
                        navigation={true}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 10,
                                slideShadows: false

                            }
                        }
                        slidesPerView={'auto'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >

                        <SwiperSlide >
                            <div className="slide-clinic">
                                <div className="clinic-card">
                                    <img src={cl1} />
                                </div></div></SwiperSlide>
                        <SwiperSlide >
                            <div className="slide-clinic">
                                <div className="clinic-card">
                                    <img src={cl1} />
                                </div></div></SwiperSlide>
                        <SwiperSlide >
                            <div className="slide-clinic">
                                <div className="clinic-card">
                                    <img src={cl1} />
                                </div></div></SwiperSlide>
                        <SwiperSlide >
                            <div className="slide-clinic">
                                <div className="clinic-card">
                                    <img src={cl1} />
                                </div></div></SwiperSlide>
                    </Swiper></div>

            </motion.div>
        </motion.div>
    );
}

export default Aboutus;
