import { faChalkboard, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import error from '../../asset/image/404.gif'

const Resource = () =>{
    return(
        <Fragment>
            <Container>
                    <div class="resources_wrapper"> 
                          <div class="section_header">
                              RESOURCES FOR BMANA MEMBERS 
                          </div>
                        <Row>
                            <Col lg={3}> 
                                <div class="resource_wrap">
                                    <div class="top_wrap text-center">
                                         <i> <FontAwesomeIcon icon={faChalkboardUser}/> </i>
                                         <h4>CAREER OPPORTUNITIES</h4>
                                    </div>
                                    <div class="bottom_wrap">
                                         <p>Access tools designed to help you succeed in your practice no matter the stage of your career.</p>
                                    </div>
                                 </div> 
                            </Col>
                            <Col lg={3}> 
                                <div class="resource_wrap">
                                    <div class="top_wrap text-center">
                                         <i> <FontAwesomeIcon icon={faChalkboardUser}/> </i>
                                         <h4>Constitution & By-Laws Committee </h4>
                                    </div>
                                    <div class="bottom_wrap">
                                         <p> Chairman Dr. Quazi Al Tariq (DMC)   Members Dr. Belayet Hossain (MMC) Dr. Mostafa Hassan (SOMC) Dr. Mohammed Mominul Haque (CMC) Dr. Mohammed Farhad Hussain (SSMC) </p>
                                    </div>
                                 </div> 
                            </Col>
                        </Row>
                    </div>
            </Container>
        </Fragment>
    )
}
export default  Resource;