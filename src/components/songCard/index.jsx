import React from 'react';
import "./songCard.css";
import AlbumImage from './albumImagen';
import AlbumInfo from './albumInformacion';

export default function SongCard({album}) {
  
  return ( 
  
   <div className='songCard-body'>
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />

    </div>
    

  );
}
