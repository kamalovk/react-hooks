import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import '../main/main.scss'
import FavoritePhotoContext from '../favorite/favorite-context'
import OpenPhotoContext from '../open-photo/open-photo-context'


function Favorite() {
  const { favPhoto, setFavPhoto } = useContext(FavoritePhotoContext)
  const { setPhoto } = useContext(OpenPhotoContext)
  function removeFavPhoto(id){
    const idx = favPhoto.findIndex((el) => el.id === id)
    const newArray = [...favPhoto.slice(0, idx), ...favPhoto.slice(idx + 1)]
    setFavPhoto(newArray);
  }
  if (favPhoto == null){
    return null   
  } 
      
  const favPhotos = favPhoto.map((favPhoto)=>(
    <div className="grid-item" key = {favPhoto.id}>
            <div className="photos-block-background">
                <img src={favPhoto.photo.urls.full} className="photos-block-background-img"></img>
            </div>  
            <div className='photos-block-content'> 
                <div className="content-profile">
                  <img className="content-profile-img"src={favPhoto.photo.user.profile_image.small}/>
                  <span className="content-profile-name">{favPhoto.photo.user.first_name}</span>
                  <span className="content-profile-link">{'@' +favPhoto.photo.user.instagram_username}</span>
                </div>
                <div className="content-icons">
                  <div className="content-icons-like content-icons-item">
                    <button onClick={() => removeFavPhoto(favPhoto.photo.id)}>dislike</button>
                  </div>
                  <div className="content-icons-open content-icons-item">
                    
                    <Link to="/open-photo" onClick={() => isOpen(favPhoto.photo)}>open</Link>
                  </div>
                  <div className="content-icons-download content-icons-item">
                    <a href={favPhoto.photo.urls.full} download={favPhoto.photo.user.first_name}>DOWNLOAD</a>
                  </div>
                </div>
            </div>
          </div>
  )) 

  function isOpen(obj){
    setPhoto(obj)
  }
  
  return(
    <div>
      <div className='main-content'>
        <div className='photos-block grid'>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 1000: 2, 1485: 3}}>
              <Masonry>
                {favPhotos}
              </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  )
}


export default Favorite;