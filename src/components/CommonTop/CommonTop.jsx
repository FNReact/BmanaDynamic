import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const CommonTop = (props) =>{ 
    return(
        <Fragment>
            <div className="commonTop">
                <Container>
                  <div className="commonTop_wrapper">
                       <div className="top_wrap">
                           <h3>Bangladesh Medical Association of North America</h3>
                           <div className="page_name">
                                {props.pageTitle}
                           </div>
                       </div>
                   </div>
                </Container>
            </div>
        </Fragment>
    )
}
export default  CommonTop;