import React, {useContext} from 'react';

import '../open-photo/open-photo.scss'
import OpenPhotoContext from '../open-photo/open-photo-context'
function OpenPhoto() {
const {photo} = useContext(OpenPhotoContext)
  
  return(
    <div className='container-photo'>
      <img className='container-photo-img' src={photo.urls.small}></img>
    </div>
  )
}

export default OpenPhoto;