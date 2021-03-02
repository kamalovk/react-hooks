import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../header/header.scss';
import {Link} from 'react-router-dom';


function Header() {
  const [headerDown, setHeaderDown] = useState('awd');
  const [isOn, setIsOn] = useState(false)
  let headerDownClass = 'header-container'
  const navObjects = {
    search: {
      value: 'Поиск',
      id: 'search'
    },
    history: {
      value: 'История поиска',
      id: 'history'
    }
  }
  
  function headerDownMake(e) {
    setIsOn(current => !current);
    
      
  }
  if(isOn == true){
    headerDownClass = 'header-container header-container-down'
    
  }
  else if(isOn == false){
    headerDownClass = 'header-container'
  }


  
  return(
    <div className='header'>
      <div className={headerDownClass} >
        <div className="group-logo">
          <img src='/src/img/header/imageStackLogo.svg' className="group-logo-img"></img>
          <Link to="/">ImageStock</Link>
        </div>
        <div className='nav-container'>
          <ul className='nav-container-ul'>
            <li id="awd" className='nav-container-li' onClick = {  headerDownMake }>
              <img></img>
              <Link>{navObjects.search.value}</Link>
            </li>
            <li className='nav-container-li' >
              <img></img>
              <Link to="/favorite">Избранное</Link>
            </li>
            <li className='nav-container-li' onClick = {  headerDownMake }>
              <img></img>
              <Link>{navObjects.history.value}</Link>
            </li>
          </ul>
        </div>
        
        
        
      </div>
      <div className='header-hide-content'>
            
      </div>
    </div>
  )
}
export default Header;  
