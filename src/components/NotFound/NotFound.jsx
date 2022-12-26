import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import error from '../../asset/image/404.gif'

const NotFound = () =>{
    return(
        <Fragment>
            <Container>
                <div className="eroor_img">
                     <img src={error} alt="" />
                </div>
            </Container>
        </Fragment> 
    )
}
export default  NotFound;