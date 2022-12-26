import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";
import Banner1 from '../../asset/image/Banner1.png' 

const Convention = () =>{
    return( 
        <Fragment>
            <Container>
                <div className="Convention">
                      <div class="section_header">
                           PAST CONVENTIONS 
                      </div> 
                    <div className="Convention_wrapper">
                      <Swiper
                         //effect={"fade"}   
                         cssMode={true}
                         keyboard={true}
                         loop={true}
                         pagination={{
                           clickable: true,
                         }}
                         autoplay={{ 
                           delay: 3000,
                           disableOnInteraction: false,
                         }}
                         modules={[EffectFade, Autoplay, Pagination]}
                         className="mySwiper">
                         <SwiperSlide>
                                <img src={Banner1} alt="" />
                         </SwiperSlide>
                          <SwiperSlide> 
                                <img src={Banner1} alt="" />
                         </SwiperSlide>
                       </Swiper>
                      </div>
                </div>
            </Container>
        </Fragment>
    )
}
export default  Convention;