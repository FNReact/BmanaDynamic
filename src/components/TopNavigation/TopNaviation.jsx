import React, { Fragment, useContext, useEffect, useState } from 'react'
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/style.css";
import "../../asset/css/responsive.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import { UserContext } from '../../router/AppRouter';
import { logoUrl } from '../../api/Api';
const TopNaviation = (props) => {
  const data = useContext(UserContext)
  const{getInfo,getNav} = data
  const [memberShow, memberModalShow] = React.useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const logo = `${logoUrl}/${getInfo.entity_logo}`

    useEffect(() => {
        window.onscroll = () => {
          setStickyNav(window.pageYOffset === 0 ? false : true);
          return () => (window.onscroll = null);
        };
      }, []);

      const dynamicNavs =  getNav.map((data,key)=>{
        console.log(key)
        if(data.sub_nav.length>0){
         return(
          <Fragment>

               <li key={data.id}><Link
                        to={`/common-page/${data.id}`}
                        state={{
                          bodyData:data.body_content,
                          pageTitle:data.page_title
                        }}>
                      {data.menu_name}
                    </Link> <i><FontAwesomeIcon icon={faCaretDown}/> </i>
                   <span className="droppper" ></span>
                   <ul className="sub_down">
                    {data.sub_nav.map((sub,key) => {
                          return (
                            // <li>{sub.menu_name}</li>
                            <li key={sub.id}> <Link
                                  to={`/common-page/${data.id}`}
                                  state={{
                                  bodyData:sub.body_content,
                                  pageTitle:sub.page_title
                                }}>
                                {sub.menu_name}
                              </Link></li>
                          );
                        })}
                       
                     </ul>
               </li>
         
          </Fragment>
         
         )
        }else{
          return(
            <Fragment>
               <li key={data.id}><Link
                        to={`/common-page/${data.id}`}
                        state={{
                          bodyData:data.body_content,
                          pageTitle:data.page_title
                        }}>
                      {data.menu_name}
                 </Link></li>
                
            </Fragment>
           
          )
        }
       
       
      })

return ( 
  <Fragment>
    <title>{props.title}</title>
       <header>
        <div className={` header ${stickyNav ? 'HeaderSticky' : ''} }`}>
           <div className="header_part_one">
                <Container>
                  <div className="home_header">
                       <div className="logo">
                          <img src={logo} alt="" />
                          <span>{getInfo.name}</span>
                       </div>
                       <div className="header_end_side">
                       <div className="mamberLogin"  onClick={() => memberModalShow(true)}>
                          <Link to='/about'>Become a member</Link> 
                        </div> 
                       <div className="mamberLogin"  onClick={() => memberModalShow(true)}>
                           Login
                        </div> 
                        <div className="search_box">
                              <form action="#">
                                   <input type="text" placeholder=" SEARCH PHYSICIAN " className="form_control" />
                                   <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                              </form>
                         </div>
                      </div>
                  </div>
               </Container>
           </div>
           <div className="header_part_two">
               <Container fluid> 
                      <ul className="nav_list">
                      <li><Link to='/'>Home </Link></li>
                        {dynamicNavs}
                      </ul> 
               </Container>
           </div>
          </div>
       </header>
  </Fragment>
)
}

export default TopNaviation