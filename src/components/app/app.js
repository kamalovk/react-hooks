
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from '../header/header'
import Favorite from '../favorite/favorite'
import Main from '../main/main'
import OpenPhoto from '../open-photo/open-photo'
import '../app/app.scss'
import {BrowserRouter as Router, Redirect, Route, Switch}  from 'react-router-dom'; 
import OpenPhotoContext from '../open-photo/open-photo-context'

function App() {
  const [photo, setPhoto] = useState('bla bla')
  
  return(

    <Router>
      <OpenPhotoContext.Provider value={{photo, setPhoto}}>
        <div className='app-container'>
          <Header />
          <Route path='/' component={Main} exact={true}/>
          <Route path='/favorite' component={Favorite}/>
          <Route path='/open-photo' component = {OpenPhoto} />
        </div>
      </OpenPhotoContext.Provider>
    </Router>
  )
}



export default App;