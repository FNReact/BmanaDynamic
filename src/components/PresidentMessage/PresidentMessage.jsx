import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cp from '../../asset/image/cp.png' 

const PresidentMessage = () =>{
    return(
        <Fragment>
            <Container>
                <div className="PresidentMessage_wrapper">
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}> 
                            <div className="PresidentMessage_wrap">
                               <div className="style_1"> <img src={cp} alt="" /></div>  
                               <div className="style_2"> <img src={cp} alt="" /></div>  
                               <p> It is a great honor and privilege to be the President of Bangladesh Medical Association of North America (BMANA), a prestigious organization that is committed to helping the medical profession and the community we serve. </p>
                               <p> As President, I pledge to serve as a strong voice and dedicated advocate for our member physicians. I am truly excited to embrace this opportunity to help advance the BMANA’s work in career development of physicians of Bangladeshi descent and medical education, to shape the future of medicine, medical education and improve patient care here and in Bangladesh. I am driven to support the mission of BMANA by focusing on the dynamic future of medicine, reaching out to eligible members getting them involved in our activities. Our future lies in the hand of its membership body, we must embrace the next generation physicians with innovative ideas. In this path forward, we need strong committed leaders with highest standards of ethics and professionalism. We must embrace the evolving changes of healthcare system, improve our relationship and adopt a progressive vision. General members and local chapters are our strength in BMANA. We need to create an interactive methods of Realtime communication with our members, affiliated local chapters and alumni associations. Stronger relationship with local organizations are key to our growth.</p>
                               <p> I look forward to working on your behalf during my tenure as president. Our leadership will never give up in efforts to advance our policies and achieve our common goals. Thank you. Sincerely, </p>
                               <div className="messanger_name"> Jamal Uddin, MD </div>
                               <div className="messanger_title"> President </div>
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </div>
            </Container>
        </Fragment> 
    )
}
export default  PresidentMessage;