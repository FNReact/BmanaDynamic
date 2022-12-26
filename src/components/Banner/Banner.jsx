import React, { Fragment, useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import Banner1 from '../../asset/image/Banner1.png' 
import SideBar from "../SideBar/SideBar";
import { UserContext } from "../../router/AppRouter";
import { BannerPhotoUrl } from "../../api/Api";

const Banner = (props) =>{
  const data = useContext(UserContext)
  const{getSliders} = data

  const Sliders = getSliders.map((data,key)=>{
    const imagePath = `${BannerPhotoUrl}/${data.image}`
    console.log(imagePath)
    return(
      <Fragment>
          <SwiperSlide key={key}>
              <img src={imagePath} alt="" />
                <div className="banner_text">
                  {data.title}
                </div>
          </SwiperSlide>
         
      </Fragment>
    )
  })
    return(
        <Fragment>
            <div className="banner">
            <Swiper
              //effect={"fade"}   
              cssMode={true}
              navigation={true}
              keyboard={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{ 
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay, Navigation, Pagination]}
              className="mySwiper">
                
                
            {Sliders}
            </Swiper>
            
            <SideBar user={props.user} />
            </div>
        </Fragment>
    )
}
export default  Banner;