import React, { Fragment } from "react";
import CommonTop from "../components/CommonTop/CommonTop";
import Footer from "../components/Footer/Footer";
import PresidentMessage from "../components/PresidentMessage/PresidentMessage";
import TopNaviation from "../components/TopNavigation/TopNaviation";

 

const Constitution = () =>{
    return(
        <Fragment> 
            <div className="header_Two"> 
               <TopNaviation/>  
            </div> 
            <CommonTop/>  
            <PresidentMessage/>
            <Footer/>    
        </Fragment>  
    )
}

export default Constitution