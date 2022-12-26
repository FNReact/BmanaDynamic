import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DonateImg from '../../asset/image/donate.png' 


const Donate = () =>{
    return(
        <Fragment>
            <Container>
                <div className="donate">
                    <div class="section_header">
                       DONATE TO BMANA DISASTER RELIEF FUND
                    </div>

                    <div className="donate_wrapper">
                        <div className="donate_bg"> <img src={DonateImg} alt="" /> </div> 
                        <div className="donate_wrap"> 
                        <h3>Dear Colleagues,</h3>
                        <p>Please stay safe and practice best medicine in this critical moments of our social and clinical life around COVID-19. Our physicians in Bangladesh are in dire needs of Personal Protective Equipment(PPE). There will be also need of ventilators, clinical advice and knowledge exchange. We created a task force which is working diligently with physicians in USA and Bangladesh. We are requesting your help and donations to BMANA disaster fund. Please donate your time and money as you have done previously during natural disasters locally and in Bangladesh.</p>
                        <p>It is time to extend humanitarian assistance and help them to the best of our ability. </p>

                        <div className="donate_box">
                            <Row className="align-items-center">
                                <Col lg={4}>
                                   <div className="donateBox_left">
                                      <div className="donate_btn"> Donate Here </div>
                                   </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="donateBox_right">
                                         <div className="donate_info">Mail to :</div>
                                         <h5>Dr. Abul K Azad</h5>
                                         <h5>Treasurer BMANA</h5>
                                         <h5>8 Sage Estate</h5>
                                         <h5>Menands, NY 12204</h5>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                 </div>
             </div>
        </Container>
    </Fragment>
    )
}
export default  Donate;