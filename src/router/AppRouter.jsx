import React, { createContext, Fragment, useEffect, useState } from 'react'
import{ Routes, Route, useLocation} from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import CommonPage from '../pages/CommonPage';
import Constitution from '../pages/Constitution';
import ExecutiveCommitteePage from '../pages/ExecutiveCommitteePage';
import HomePage from '../pages/HomePage';
import MembershipDirectoryPage from '../pages/MembershipDirectoryPage';
import MissionPage from '../pages/MissionPage';
import NotFoundPage from '../pages/NotFoundPage';
import PastExicutiveCommiteePage from '../pages/PastExicutiveCommiteePage';
import PresidentMessagePage from '../pages/PresidentMessagePage';
import {GENERAL_SERVICE} from '../api/Api'
import { membersUrl } from "../api/Api";
export const UserContext = createContext(null);

const AppRouter = () => {
  const location = useLocation();
  
  const url = GENERAL_SERVICE;
  const localData = localStorage.getItem('data');
  const membersData = localStorage.getItem('members');
    const fetchInfoData = async () => {
      try {
        const response = await fetch(url);
        const getdata = await response.json();
        // console.log(getdata)
        localStorage.setItem('data',JSON.stringify(getdata))
      } catch (error) {
        // console.log("error", error);
      }
    };
    const fetchMemberData = async () => {
      try {
        const response = await fetch(membersUrl);
        // console.log(response)
        const getdata = await response.json();
        // console.log('hfdcvhgv',getdata)
        localStorage.setItem('members',JSON.stringify(getdata));
      } catch (error) {
        // console.log("error", error);
      }
    };
    console.log(localData)
    useEffect(()=>{
      fetchMemberData();
      // fetchMemberData();
        
    },[])
if(!localData){
  fetchInfoData();
}
if(!membersData){
  fetchMemberData();
}



  const getLocalData = localStorage.getItem('data');
  const data = JSON.parse(getLocalData);
  console.log(data)
  const getInfo = data.data.ms_info;
  const getNav = data.data.main_nav;
  const getSliders = data.data.sliders;
  const getAnnaounce = data.data.no_position;
  const getNews = data.data.front_sections;


  // console.log(getEvents)

  useEffect(() => { window.scrollTo(0, 0); }, [location])

  return (
    <Fragment>
      <UserContext.Provider value={{getInfo,getNav,getSliders,getAnnaounce,getNews}}>
            <Routes >
                <Route path='*' element={<NotFoundPage/>} />
                <Route exact path="/" element={<HomePage/>}/> 
                <Route exact path="common-page/:id" element={<CommonPage/>}/> 
                <Route exact path="about" element={<AboutPage/>}/> 
                <Route exact path="mission" element={<MissionPage/>}/> 
                <Route exact path="constitution" element={<Constitution/>}/>  
                <Route exact path="president-message" element={<PresidentMessagePage/>}/>  
                <Route exact path="past-exicutive-commitee" element={<PastExicutiveCommiteePage/>}/>  
                <Route exact path="membership-directory" element={<MembershipDirectoryPage/>}/>  
                <Route exact path="executive-committee-page" element={<ExecutiveCommitteePage />}/>  
            </Routes>
      </UserContext.Provider>
    </Fragment>
  )
}

export default AppRouter