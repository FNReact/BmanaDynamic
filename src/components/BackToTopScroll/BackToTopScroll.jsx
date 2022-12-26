import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import {useEffect} from 'react';

 
const BackToTopScroll = () =>{

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return( 
        <Fragment>
             <button onClick={() => {
                     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                   <i className="backToTop_scroll"><FontAwesomeIcon icon={faArrowUp}/></i>
             </button>
        </Fragment>
    )
}
export default  BackToTopScroll;