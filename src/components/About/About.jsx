import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../../asset/image/bmana.png' 

const About = () =>{
    return(
        <Fragment>
            <Container> 
                 <Row>
                    <Col lg={1}></Col> 
                    <Col lg={10}> 
                    <div className="about_wrapper">
                     <div className="logo"><img src={logo} alt="" /> </div>
                     <div className="about_content">
                        <p>Bangladesh Medical Association of North America (BMANA) was founded in 1981 to represent the interest of physicians and dentists of Bangladeshi descent living in North America. In addition to more than 2500 practicing physicians living in North America, BMANA aims to represent all medical students, residents and fellows of Bangladeshi origin in the United States.</p>
                        <p>BMANA operates through a central body of elected officials and 18 local chapters organized in various states in the USA. Additionally, BMANA has eight sister alumni association. Since its inception, BMANA has been organizing annual meetings in collaboration with local chapters in various states.</p>
                        <p>Through BMANA Disaster Fund initiatives, BMANA had conducted major relief operation for the victims of Hurricane Sidr, Hurricane Sandy, Rohingya Refugee Crisis and COVID-19 pandemics. BMANA is organized  and operated exclusively for educational, scientific, cultural and charitable purposes set forth in section Internal Revenue Code Section 501(c)(3).</p>
                        <p>BMANA is actively involved in scientific, social, educational and charitable activities serving communities locally and abroad. Young Physicians Career Advancement Program (Program) is an iconic program to guide residency seeking physicians started by New York Chapter. YPCAP became a grand success over the years. BMANA aspires to be a part of mainstream professional organization promoting public health and lead advocate of International Medical Graduates at local, state and national level.</p>
                      </div>
                     </div>
                    </Col> 
                    <Col lg={1}></Col>
                 </Row>
            </Container>
        </Fragment> 
    )
}
export default  About;