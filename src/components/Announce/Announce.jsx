import React, { Fragment, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { UserContext } from "../../router/AppRouter";
 
const Announce = () =>{
  const data = useContext(UserContext)
  const{getAnnaounce} = data 

  const dynamicData = getAnnaounce.slice(0,3).map((data,key)=>{
    return(
      <Fragment key={key}>
           <Col lg={4} key={key}>
                <Link to="Common-Page" className="announce_wrap">
                     <div className="announce_wrap_item">
                         <h2> {data.menu_name}  </h2>
                          <div className="read_btn"> 
                          <Link
                              to={`/common-page/${data.id}`}
                              state={{
                                bodyData:data.body_content,
                                pageTitle:data.page_title
                              }}>
                            Read More
                          </Link>
                          </div>
                     </div>
                </Link>
              </Col>
      </Fragment>
    )
  })
    return( 
        <Fragment>
            <div className="announce">
               <Container> 
                    <Row>
                     {dynamicData}
                    </Row>     
               </Container>
            </div> 
        </Fragment>
    )
}
export default  Announce;