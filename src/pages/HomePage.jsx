import React, {createContext, Fragment } from 'react'
import Announce from '../components/Announce/Announce'
import BackToTopScroll from '../components/BackToTopScroll/BackToTopScroll'
import Banner from '../components/Banner/Banner'
import Commitee from '../components/Commitee/Commitee'
import Convention from '../components/Convention/Convention'
import Donate from '../components/Donate/Donate'
import Footer from '../components/Footer/Footer'
import News from '../components/News/News'
import Resource from '../components/Resource/Resource'   
import SubBanner from '../components/SubBanner/SubBanner'
import TopNaviation from '../components/TopNavigation/TopNaviation'
import { useState, useEffect } from "react";
import axios from "axios";  
 
const HomePage = () =>{

  const [data,setData] = useState({}) 
  const url="https://lemmesaybd.app/api/microsite/details/c17cfd16-2131-4ade-a9fb-4ebaf6bec274"  
  useEffect(()=>{
    axios.get(url)
    .then(function(response){
      setData(response.data)
    })

    .catch(function(error){  
      console.log(error)
    })
    },[])

  window.scroll(0,0)
  return (  
    <Fragment>
        <TopNaviation title="Home"/>
        <Banner user={data}/>  
        <Commitee/>
        <Announce/>
        <News/>  
        <Resource/> 
        <Convention/> 
        <SubBanner/>
        <Donate/>
        <Footer/>
        <BackToTopScroll/>
   </Fragment>
  )
}
export default HomePage