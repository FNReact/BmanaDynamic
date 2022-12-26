import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const SubBanner = () =>{
    return(
        <Fragment>
            <div className="subBanner">
               <Container>
                  <div className="subBanner_content">
                       <div className="title_of_banner"> 41st BMANA Convention 2022 – Where Great Minds Unite.  </div>
                       <div className="title_link"> bmanaconvention2022.org </div>
                  </div>
               </Container>
            </div>
        </Fragment>
    )
}
export default  SubBanner;