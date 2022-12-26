import React, { Fragment, useContext, useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../pages/HomePage";
import { UserContext } from "../../router/AppRouter";
import { logoUrl } from "../../api/Api";


// Axios
const SideBar = (props) =>{
  const data = useContext(UserContext)
  const{getInfo,getNav} = data
  console.log(getInfo)

  const logo = `${logoUrl}/${getInfo.entity_logo}`
const {user} = props

const [memberShow, setMemberShow] = useState(false); 
console.log(logo)

const dynamicNavs =  getNav.map((data,key)=>{
  console.log(key)
  if(data.sub_nav.length>0){
   return(
    <Fragment>
        <Accordion.Item eventKey={key}>
           <Accordion.Header> 
                {data.menu_name}
           <i><FontAwesomeIcon icon={faCaretDown}/> </i></Accordion.Header>
           <Accordion.Body>
                <ul>  
                  <li> <Link
                  to={`/common-page/${data.id}`}
                  state={{
                    bodyData:data.body_content,
                    pageTitle:data.page_title
                  }}>
                {data.menu_name}
              </Link></li>
                  {data.sub_nav.map((sub) => {
                    return (
                      // <li>{sub.menu_name}</li>
                      <li key={sub.id}> <Link
                            to={`/common-page/${data.id}`}
                            state={{
                            bodyData:sub.body_content,
                            pageTitle:sub.page_title
                          }}>
                          {sub.menu_name}
                        </Link></li>
                    );
                  })}
 
                </ul> 
           </Accordion.Body> 
        </Accordion.Item>  
   
    </Fragment>
   
   )
  }else{
    return(
      <Fragment>
          <Accordion.Item eventKey={key}>
            <Accordion.Header> 
              <Link
                  to={`/common-page/${data.id}`}
                  state={{
                    bodyData:data.body_content,
                    pageTitle:data.page_title
                  }}>
                {data.menu_name}
              </Link>
            </Accordion.Header>
          </Accordion.Item>  
      </Fragment>
     
    )
  }
 
 
})

    return(
        <Fragment>
            <div className="sideBar"> 
            <div className="sideBar_contain">
                  <div className="logo text-center"> 
                       <img src={logo} alt="" /> 
                  </div>
                  {/* <div className="buttonOf_login">
                      <div className="login_btn" onClick={() => setMemberShow(true)} >
                         <i><FontAwesomeIcon icon={faUser}/></i> Member Login   
                      </div> 
                  </div> */}
                  <hr/>
                  <div className="nav_list">
                  <Accordion>
                      {dynamicNavs}
                    </Accordion> 
                  </div>
                </div>
            </div>
          <MyVerticallyCenteredModal show={memberShow} onHide={() => setMemberShow(false)}/>
       </Fragment>
    )
    // Login Modal 

    function MyVerticallyCenteredModal(props) {
      return (
        <Modal 
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="memberModal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <div className="logo_title"> Bangladesh Medical Association of North America </div>
            <div className="modal_main_content">
                 <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" className="flex-row">
                         <Nav.Item>
                           <Nav.Link eventKey="first">Sign In</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                           <Nav.Link eventKey="second">New Mamber Sign Up</Nav.Link>
                         </Nav.Item>
                    </Nav>
                    <Tab.Content>
                         <Tab.Pane eventKey="first">
                             <Row>
                                <Col lg={2}></Col>
                                <Col lg={8}>
                                <div className="login_bday">
                                       <form action="#">
                                              <Row>
                                                  <Col lg={12}>
                                                     <input type="text"className="form_control" name="" placeholder="Email / Username "/>
                                                  </Col>
                                                  <Col lg={12}>
                                                    <input type="text"className="form_control" name="" placeholder="Password"/>
                                                  </Col>
                                                  <Col lg={12}>
                                                     <div className="login_pass_save">
                                                        <div className="pass_left">
                                                          <input type="checkbox" className="chequeB"/> Remember
                                                        </div>
                                                        <div className="pass_right">
                                                          Forget Password?
                                                        </div>
                                                     </div>
                                                  </Col>
                                                  <Col lg={12}>
                                                     <div className="login_btn"> Log In</div>
                                                  </Col> 
                                              </Row>
                                       </form>
                                   </div>
                                </Col>
                                <Col lg={2}></Col>
                             </Row>
                         </Tab.Pane>
                         <Tab.Pane eventKey="second">
                             <Row>
                                <Col lg={2}></Col>
                                <Col lg={8}>
                                <div className="registerBody">
                                       <form action="#">
                                              <Row>
                                                  <Col lg={12}>
                                                     <input type="text"className="form_control" name="" placeholder=" First Name  "/>
                                                  </Col>
                                                  <Col lg={12}>
                                                    <input type="text"className="form_control" name="" placeholder=" Last Name "/>
                                                  </Col>
                                                  <Col lg={12}>
                                                    <input type="text"className="form_control" name="" placeholder=" E-mail "/>
                                                  </Col>
                                                  <Col lg={12}>
                                                    <input type="text"className="form_control" name="" placeholder=" Username "/>
                                                  </Col>
                                                  <Col lg={12}>
                                                    <input type="text"className="form_control" name="" placeholder=" Password "/>
                                                  </Col>
                                                  <Col lg={12}>
                                                    <input type="text"className="form_control" name="" placeholder=" Reapet Password "/>
                                                  </Col>
                                                  <Col lg={12}>
                                                     <div className="login_pass_save">
                                                        <div className="pass_left">
                                                          <input type="checkbox" className="chequeB"/> Agree with our terms and condition
                                                        </div>
                                                     </div>
                                                  </Col> 
                                                  <Col lg={12}>
                                                     <div className="login_btn"> Continue </div>
                                                  </Col> 
                                              </Row>
                                       </form>
                                   </div>
                                </Col>
                                <Col lg={2}></Col>
                              </Row>
                         </Tab.Pane>
                    </Tab.Content>

                 </Tab.Container>
            </div>
          </Modal.Body>
        </Modal>
      );
    }
}
export default  SideBar;