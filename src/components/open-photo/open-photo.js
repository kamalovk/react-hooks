import React, {useContext} from 'react';

import '../open-photo/open-photo.scss'
import FavoritePhotoContext from '../favorite/favorite-context'
import OpenPhotoContext from '../open-photo/open-photo-context'
function OpenPhoto() {
const { favPhoto, setFavPhoto } = useContext(FavoritePhotoContext)
const {photo} = useContext(OpenPhotoContext)
function addFavPhoto(photo){
  setFavPhoto([...favPhoto, {
    id: photo.id,
    photo: photo
  }]);
}
  return(
    <div className='container-photo'>
      <div className='container-photo-info'>
        <div className='container-photo-info-left'>
          <img className="content-profile-img"src={photo.user.profile_image.small}/>
          <span className="content-profile-name">{photo.user.first_name}</span>
          <span className="content-profile-link">{'@' +photo.user.instagram_username}</span>
        </div>
        <div className='container-photo-info-right'>
          <button onClick={() => addFavPhoto(photo)}>like</button>
          <button>download</button>
        </div>
      </div>
      <img className='container-photo-img' src={photo.urls.small}></img>
      <div className='container-photo-tags'>ajdwiawdawdaiwdjawjdiawjiajijiawdjjiwd</div>
    </div>
  )
}
export default OpenPhoto;