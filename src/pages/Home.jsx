import React from 'react';
import Playlist from '../components/Playlist';
import Library from '../components/Library';
import Player from '../components/Player';

function Home() {
  return (
    <div>
      <h1>Reproductor de Música</h1>
      <Playlist />
      <Library />
      <Player />
    </div>
  );
}

export default Home;
