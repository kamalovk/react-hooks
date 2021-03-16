import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../main/main.scss'
import OpenPhotoContext from '../open-photo/open-photo-context'
import FavoritePhotoContext from '../favorite/favorite-context'
import Favorite from '../favorite/favorite';
function Main() {
  let accessToken = "nPnKCzSzGzaADPN43hJe4WernJ8xq3FkZtrOkGo9_vg" ;
  let main_url = 'https://api.unsplash.com/'
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1)
  const {setPhoto} = useContext(OpenPhotoContext)
  const { favPhoto ,setFavPhoto} = useContext(FavoritePhotoContext)
  function pageUp() {
    setPage(prev => prev + 1)
  }
  function pageDown() {
    if(page > 1){
      setPage(prev => prev - 1)
    } else{
      setPage(prev => prev)
    }
  }
  function addFavPhoto(photo){
    setFavPhoto([...favPhoto, {
      id: photo.id,
      photo: photo
    }]);
  }
  useEffect(()=>{
    axios.get(main_url + 'photos?page='+page+'&client_id='+ accessToken)
      .then((res) => {
        setPhotos(res.data)
      })
  }, [page])
  function isOpen(obj){
    setPhoto(obj)
  }
  const mainPagePhotos = photos.map((photo) => 
    ( 
          <div className="grid-item" key = {photo.id}>
            <div className="photos-block-background">
                <img src={photo.urls.small} className="photos-block-background-img"></img>
            </div>  
            <div className='photos-block-content'> 
                <div className="content-profile">
                  <img className="content-profile-img"src={photo.user.profile_image.small}/>
                  <span className="content-profile-name">{photo.user.first_name}</span>
                  <span className="content-profile-link">{'@' +photo.user.instagram_username}</span>
                </div>
                <div className="content-icons">
                  <div className="content-icons-like content-icons-item">
                    
                    <button onClick={() => addFavPhoto(photo)}>like</button>
                  </div>
                  <div className="content-icons-open content-icons-item">
                    
                    <Link to="/open-photo" onClick={() => isOpen(photo)}>open</Link>
                  </div>
                  <div className="content-icons-download content-icons-item">
                    <a href={photo.urls.small} download={photo.user.first_name}>DOWNLOAD</a>    
                  </div>
                </div>
            </div>
          </div>
    ))

  return(
    <div className='main-content'>
      <div className='photos-block grid'>
        <button onClick={pageDown}>pageDown</button>
        <button onClick={pageUp}>pageUp</button>
        {page}
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 1000: 2, 1485: 3}}>
          <Masonry>
            {mainPagePhotos}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Main;