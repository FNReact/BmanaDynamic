import React, { Fragment, useEffect, useState } from "react";
import About from "../components/About/About";
import CommonTop from "../components/CommonTop/CommonTop";
import Footer from "../components/Footer/Footer";
import Mission from "../components/Mission/Mission";
import TopNaviation from "../components/TopNavigation/TopNaviation";



const MissionPage = () =>{
    return(
        <Fragment> 
            <div className="header_Two"> 
               <TopNaviation/>  
            </div> 
            <CommonTop/>   
            <Mission/>
            <Footer/>    
        </Fragment>  
    )
}

export default MissionPage