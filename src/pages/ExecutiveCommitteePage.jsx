import React, { Fragment } from "react";
import Commitee from "../components/Commitee/Commitee";
import CommonTop from "../components/CommonTop/CommonTop";
import Footer from "../components/Footer/Footer";
import TopNaviation from "../components/TopNavigation/TopNaviation";

const ExecutiveCommitteePage  = () =>{
    return(
        <Fragment> 
            <div className="header_Two"> 
               <TopNaviation/>  
            </div> 
            <CommonTop/>  
            <div className="executive_committee">
                 <Commitee/>
            </div>
            <Footer/>    
        </Fragment>  
    )
}

export default ExecutiveCommitteePage 