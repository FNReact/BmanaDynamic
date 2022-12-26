import React, { Fragment } from "react";
import CommonTop from "../components/CommonTop/CommonTop";
import Footer from "../components/Footer/Footer";
import TopNaviation from "../components/TopNavigation/TopNaviation";

const MembershipDirectoryPage = () =>{
    return(
        <Fragment> 
            <div className="header_Two"> 
               <TopNaviation/>  
            </div> 
            <CommonTop/>  
             
            <Footer/>    
        </Fragment>  
    )
}

export default MembershipDirectoryPage