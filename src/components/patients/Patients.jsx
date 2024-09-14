// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Style.css";
import pt1 from "../../assets/pt1.png";
import pt2 from "../../assets/pt2.png";
import pt3 from "../../assets/pt3.png";
import pt4 from "../../assets/pt4.png";
import navlogo from "../../assets/navlogo.png";
import { EffectCoverflow, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-coverflow';

function Patients() {
    const [slideContent, setSlideContent] = useState([
        { img: pt1, text: "Before" },
        { img: pt3, text: "Before" },
    ]);

    useEffect(() => {
        // Function to change the slide content
        const changeSlideContent = () => {
            setSlideContent((prevContent) => {
                const newImg1 = prevContent[0].img === pt1 ? pt2 : pt1;
                const newText1 = prevContent[0].text === "Before" ? "After" : "Before";

                const newImg2 = prevContent[1].img === pt4 ? pt3 : pt4;
                const newText2 = prevContent[1].text === "Before" ? "After" : "Before";
                // Update the state with new content
                return [
                    { img: newImg1, text: newText1 },
                    { img: newImg2, text: newText2 },
                ];
            });
        };

        // Set up an interval to change the content every 2 seconds
        const intervalId = setInterval(changeSlideContent, 2000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="Patients" className="min-h-screen -mt-40 lg:mt-0">
            <motion.div className="patients-container container mx-auto" initial={{
                opacity:0,
                x:"100%"
              }} whileInView={{
                opacity:1,
                x:0
              }} transition={{duration:1,ease:"easeOut"}}>
                <h1>Patients</h1>
                <div className="swiper1-container max-w-md mx-auto">
                    <Swiper
                        modules={[EffectCoverflow, Pagination, Scrollbar, A11y]}
                        effect={'coverflow'}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                                slideShadows: false

                            }
                        }
                        slidesPerView={1}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="slide-patient w-full mx-auto">
                                <div className="patient-card flex flex-col gap-6">
                                    <img className="patient-img" src={navlogo} />

                                    <img className="patient-logo" src={slideContent[0].img} />
                                    <h3>{slideContent[0].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide><SwiperSlide>
                            <div className="slide-patient w-full mx-auto">
                                <div className="patient-card flex flex-col gap-6">
                                    <img className="patient-img" src={navlogo} />
                                    <img className="patient-logo" src={slideContent[1].img} />
                                    <h3>{slideContent[1].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide><SwiperSlide>
                            <div className="slide-patient w-full mx-auto">
                                <div className="patient-card flex flex-col gap-6">
                                    <img className="patient-img" src={navlogo} />

                                    <img className="patient-logo" src={slideContent[0].img} />
                                    <h3>{slideContent[0].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-patient w-full mx-auto">
                                <div className="patient-card flex flex-col gap-6">
                                    <img className="patient-img" src={navlogo} />
                                    <img className="patient-logo" src={slideContent[1].img} />
                                    <h3>{slideContent[1].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-patient w-full mx-auto">
                                <div className="patient-card flex flex-col gap-6">
                                    <img className="patient-img" src={navlogo} />
                                    <img className="patient-logo" src={slideContent[0].img} />
                                    <h3>{slideContent[0].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-patient w-full mx-auto">
                                <div className="patient-card flex flex-col gap-6">
                                    <img className="patient-img" src={navlogo} />
                                    <img className="patient-logo" src={slideContent[1].img} />
                                    <h3>{slideContent[1].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper2-container max-w-sm mx-auto">
                    <Swiper
                        modules={[EffectCoverflow, Pagination, Scrollbar, A11y]}
                        effect={'coverflow'}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                                slideShadows: false

                            }
                        }
                        slidesPerView={1}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        <SwiperSlide>
                            <div className="slide-patient w-full mx-auto">
                                <div className="patient-card">
                                    <img className="patient-img" src={navlogo} />
                                    <img className="patient-logo" src={slideContent[0].img} />
                                    <h3>{slideContent[0].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide><SwiperSlide>
                            <div className="slide-patient">
                                <div className="patient-card">
                                    <img className="patient-img" src={navlogo} />
                                    <img className="patient-logo" src={slideContent[0].img} />
                                    <h3>{slideContent[0].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-patient">
                                <div className="patient-card">
                                    <img className="patient-img" src={navlogo} />
                                    <img className="patient-logo" src={slideContent[1].img} />
                                    <h3>{slideContent[1].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-patient">
                                <div className="patient-card">
                                    <img className="patient-img" src={navlogo} />
                                    <img className="patient-logo" src={slideContent[0].img} />
                                    <h3>{slideContent[0].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-patient">
                                <div className="patient-card">
                                    <img className="patient-img" src={navlogo} />
                                    <img className="patient-logo" src={slideContent[1].img} />
                                    <h3>{slideContent[1].text}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </motion.div>
        </div>
    );
}

export default Patients;
