import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../../asset/image/bmana.png' 


const Member = () =>{
    return(
        <Fragment>
            <Container>
            <div className="form-3">
            <div className="form_main">
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <div className="form_top_info">
                              <div className="logo">  
                                  <img src={logo} alt="" />
                              </div>
                              <h5>BANGLADESH  MEDICAL  ASSOCIATION
                                OF  NORTH AMERICA</h5>
                          </div>
                          <div className="info">
                            <h6>MEMBERSHIP FORM</h6> 
                            <div className="mamber_t"> ELIGIBILITY :</div>
                            <ul>
                              <li> Physicians or Dentists of Bangladeshi origin or descent graduated from any WHO recognized medical or dental
                                college, residing in North America. </li>
                              <li> Physician or Dentists of Bangladeshi origin or descent graduated from any North American Medical/Dental School. </li>
                              <li>Any non-Bangladeshi citizen graduated from a medical or Dental college of Bangladesh, residing in North America
                                are eligible to become member. </li>
                            </ul>
                          </div>
                          <div className="top_table">
                             <form action="#">
                              <Row>
                                 <Col lg={6}>
                                     <div className="table_item">
                                       <h5> <input name="mambership" className="cheque" type="radio"/> Life Membership  </h5>
                                       <h6> $400 until 12/31/2022, after that $500 (no renewal required) </h6>
                                    </div>
                                 </Col>
                                 <Col lg={6}>
                                   <div className="table_item">
                                    <h5> <input  name="mambership" className="cheque" type="radio"/> Active membership </h5>
                                    <h6> $25/year until 12/31/2022, after that $50/year (active memberships are renewable yearly) </h6>
                                   </div>
                                 </Col>
                              </Row>
                             </form>
                          </div>
                       
                        <div className="form_body"> 
                          <form>
                                   
                                 <Row>
                                      <Col lg={6}>
                                            <label > Last Name : <input  type="text" name="" className="form_control " placeholder="Last Name"/> </label>
                                         
                                      </Col>
                                      <Col lg={6}>
                                         <label > First Name : <input type="text" name="" className="form_control " placeholder="Last Name"/> </label>
                                        
                                      </Col>
                                      <Col lg={12}>
                                        <label > Home Address :   <input type="text" name="" className="form_control " placeholder="Home Address"/> </label>
                                      
              
                                      </Col>
                                      <Col lg={12}>
                                       <label > Office  Address :  <input type="text" name="" className="form_control " placeholder="Office  Address"/> </label>
                                       
                                      </Col>
                                      <Col lg={12}>
                                        <label > Speciality : <input type="text" name="" className="form_control " placeholder="Speciality"/></label>
                                        
                                      </Col>
                                      <Col lg={12} className="mt-3 mb-2">
                                      <label  name="" > Telephone -:</label>
                                      </Col>
                                      <Col lg={4}>
                                       <label > Cell : <input type="text" name="" className="form_control" placeholder="Cell"/></label>
                                        
                                      </Col>
                                      <Col lg={4}>
                                       <label > Home : <input type="text" name="" className="form_control" placeholder="Home"/></label>
                                        
                                      </Col>
                                      <Col lg={4}>
                                      <label > Office : <input type="text" name="" className="form_control" placeholder="Office"/></label>
                                        
                                      </Col>
                                      <Col lg={12}>
                                        <label > E-mail : <input type="text" name="" className="form_control" placeholder="E-mail"/></label>
                                        
                                      </Col>
                                      <Col lg={8}>
                                       <label > Medical School:  <input type="text" name="" className="form_control" placeholder="Medical School"/></label>
                                       
                                      </Col>
                                      <Col lg={4} >
                                      <label >  Graduation Year :  <input type="text" name="" className="form_control" placeholder=" Graduation Year "/></label>
                                       
                                      </Col>
                                      <Col lg={5} className="mt-2">
                                      <label > State of Medical Licensure:  <input type="text" name="" className="form_control" placeholder="Medical Licensure"/> </label>
                                        
                                      </Col>
                                      <Col lg={3} className="mt-2" >
                                      <label >  Lic # <input type="text" name="" className="form_control" placeholder=" Lic #"/> </label>
                                        
                                      </Col>
                                      <Col lg={4} className="mt-2" >
                                      <label >  Hospital Affiliation:  <input type="text" className="form_control" placeholder=" Affiliation"/> </label>
                                        
                                      </Col>
                                      <Col lg={4} className="mt-3">
                                      <label > Preferred Mailing Address : </label>
                                      </Col>
                                   
                                      <Col lg={4} className="mt-3">
                                  
                                        <label > Home Address      <input name="cheque"  type="radio" className="cheque"/> </label>
                                      </Col>
                                      <Col lg={4} className="mt-3">
                                       
                                        <label > Office Address <input name="cheque"  type="radio" className="cheque"/> </label>
                                      </Col>
                                   </Row>


                                  <div className="form_footer">
                                            <div className="footer_state">
                                               STATEMENT : 
                                            </div>
                                            <Row className="mt-3">
                                                <Col lg={12}>
                                                 <div className="cheque_m">
                                                  <input type="checkbox" className="cheque"/> <span>To the best of my knowledge, the information is the correct status of my professional activity. </span>
                                       
                                                </div>
                                                </Col>
                                                <Col lg={12}>
                                                <div className="cheque_m">
                                                  <input type="checkbox" className="cheque"/>  <span>I agree to disclose above information’s for BMANA membership registry & publication. </span>
                                                </div>
                                                </Col>
                                                <Col lg={5} className="mt-3"> <label> Signature:  <input type="file" name=""/></label> </Col>
                                                
                                            </Row>
                                        </div>
                                   <div className="save_btn">
                                    <a href="#">Submit</a>
                                    </div>
                          </form>
                             <div className="f_text">
                                  Make checks payable to BMANA: (Bangladesh Medical Association of North America)
                                  PLEASE MAIL YOUR CHECK To: <span>Abul K Azad, Treasurer BMANA, 8 Sage Estate, Menands, NY 12204</span>
                                 </div>
                                 <div className="or_className"> OR</div>
                                 <div className="f_text2"> zelle/venmo your payment to: azad12204@gmail.com, print and scan your completed form, e-mail to
                                azad12204@gmail.com.
                            </div>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
                <div className="form_bottom mt-4">
                   <div className="bottomText">A Non-Profit, Professional, Scientific, Social and Charitable Or ganiza t i on</div>
                </div>
            </div>
          </div>      
            </Container>
        </Fragment> 
    )
}
export default  Member;