import React, { Fragment, useContext } from "react";
import { Container} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Navigation } from "swiper";
import news1 from '../../asset/image/s3.jpg'   
import { Link } from "react-router-dom"; 
import { UserContext } from "../../router/AppRouter";
import { newsImageUrl } from "../../api/Api";

const News = () =>{
    const data = useContext(UserContext)
  const{getNews} = data 

  const dynamicData = getNews.map((data,key)=>{
    const newsPhoto = `${newsImageUrl}/${data.featured_image}`
    return(
      <Fragment key={key}>
            <SwiperSlide key={key}>
                   <div class="slider_item"> 
                       <div class="sl_img">
                            <img src={newsPhoto} alt={data.menu_name}/> 
                       </div>
                       <h4>{data.menu_name}</h4>
                       <Link
                              to={`/common-page/${data.id}`}
                              state={{
                                bodyData:data.body_content,
                                pageTitle:data.page_title
                              }}>
                            Read More
                          </Link>
                  </div> 
             </SwiperSlide>
      </Fragment>
    )
  })
    return( 
        <Fragment>
            <div className="news">
                <Container>
                    <div className="news_wrapper">
                        <div className="section_heading">
                             NEWS AND ANNOUNCEMENT 
                        </div>
                       <Swiper
                        slidesPerView={3} 
                        spaceBetween={0} 
                         navigation={true}
                         keyboard={true}
                         loop={true}
                         autoplay={{ 
                           delay: 3000,
                           disableOnInteraction: false,
                         }}
                         modules={[ Autoplay, Navigation]}
                         className="mySwiper">
                        
                         {dynamicData}
                       </Swiper>
                    </div>
                </Container>
            </div>
        </Fragment>
    )
}
export default  News;