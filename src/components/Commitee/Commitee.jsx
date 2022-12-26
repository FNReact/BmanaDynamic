import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import demo1 from '../../asset/image/ja.png'
import { membersUrl } from "../../api/Api";
import axios from "axios";

const Commitee = () =>{
const members  = localStorage.getItem('members');
const data = JSON.parse(members);

  const dynamicMembers = data.data.map((data,key)=>{
    const memberPhoto = `https://icircles.app/${data.thumb}`
    return(
        <Fragment key={key}>
                <Col key={key} lg={3} className="mt-3">
                <div className="committe_wrap">
                    <div className="profile_img text-center">
                        <div className="p_img"> 
                        <img src={memberPhoto} alt={data.firstname}/>
                        </div>
                        <div className="designation">
                            {data.designation}
                        </div>
                    </div>
                    <div className="profile_info">
                        <h5> {data.firstname}, {data.lastname}</h5>
                        <h6>{data.email}</h6>
                    </div>
                </div>
            </Col>
        </Fragment>
    )
  })

    return(
        <Fragment>
            <div className="commitee">
               <Container>
                    <div className="committe_wrapper">
                        <div className="section_heading">
                             EXECUTIVE COMMITTEE
                        </div>
                         <Row className="justify-content-center">
                            <Col lg={3} style={{width:'0%'}}></Col> 
                           {dynamicMembers}
                         </Row>
                    </div>
               </Container>
            </div>
        </Fragment>
    )
}
export default  Commitee;