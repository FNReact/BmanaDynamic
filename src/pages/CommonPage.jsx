import React, { Fragment, useEffect, useState } from "react";
import CommonTop from "../components/CommonTop/CommonTop";
import Footer from "../components/Footer/Footer";
import TopNaviation from "../components/TopNavigation/TopNaviation";

import { useLocation, useParams } from "react-router-dom";
import parser from 'html-react-parser';

const CommonPage = () =>{
    const params = useParams();
    const location = useLocation();
  
    const bodyData = location.state.bodyData;
    const pageTitle = location.state.pageTitle;
    const bodyContents = () =>parser(bodyData);
    console.log(bodyContents())
    return(
        <Fragment> 
            <div className="header_Two"> 
               <TopNaviation/>  
            </div> 
            <CommonTop pageTitle={pageTitle}/>
            {bodyContents()}     
            <Footer/>    
        </Fragment>  
    )
}

export default CommonPage