import React, { Fragment } from "react";
import NotFound from "../components/NotFound/NotFound";
import TopNaviation from "../components/TopNavigation/TopNaviation";


const NotFoundPage = () =>{


    return(
        <Fragment>
            <TopNaviation/>
            <NotFound />
        </Fragment>
    )
}

export default NotFoundPage