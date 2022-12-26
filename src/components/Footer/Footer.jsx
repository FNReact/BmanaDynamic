import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const Footer = () =>{
    return(
        <Fragment>
             <div className="footer">
                  <Container>
                      <div className="footer_text">
                         @All Rights Reserved Bangladesh Medical Association of North America. Powered by iCircles
                      </div>
                  </Container>
             </div> 
        </Fragment>
    )
}
export default  Footer;