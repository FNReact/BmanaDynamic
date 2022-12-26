import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Mission = () =>{
    return(
        <Fragment>
            <Container> 
                <div className="mission_wrapper">
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={4}>
                            <div className="mission_card">
                                <h3> Mission  </h3>
                                <p>To promote comprehensive welfare of Bangladeshi descent physicians, dentists and allied healthcare professionals in North America.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="mission_card">
                                <h3> Vision </h3>
                                <p>To become a vibrant professional organization representing interests of North American physicians and dentists of Bangladeshi origin, be advocate for Bangladeshi medical graduates for career development in North American programs, promote and foster health care innovative ideas, create educational programs and offer collaborative professional activities for the communities.</p>
                            </div>
                        </Col> 
                        <Col lg={2}></Col>
                    </Row>
                </div>
            </Container>
        </Fragment> 
    )
}
export default  Mission;