<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Best music</title>
  <link
    rel="stylesheet"
    href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"
  />
  <link rel="stylesheet" href="./css/style.css" />
  <div className="wrapper">
    <header>
      <button className="hdbtn">
        <i className="fi fi-sr-arrow-small-left" />
      </button>
      <h3 className="p-now">playing now</h3>
      <button className="hdbtn">
        <i className="fi fi-sr-list" />
      </button>
    </header>
    <div className="payer">
      <div className="img-area">
        <img src="./imges/logo.jpg" alt="" />
      </div>
      <div className="song-details">
        <h1 className="name">Animation</h1>
        <h3 className="artist">coding</h3>
      </div>
      <div className="audioC">
        <div className="song-timer">
          <span className="current-time">0:00</span>
          <span className="max-duration">0:00</span>
        </div>
        <div className="progress-area">
          <div className="progress-bar">
            <audio id="main-audio" src="./music/24K_Magic.mp3" />
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="btnC" id="prev">
          <i className="fi fi-sr-rewind" />
        </button>
        <button className="play-pause btnC">
          <i className="fi fi-sr-play play" />
        </button>
        <button className="btnC" id="next">
          <i className="fi fi-sr-forward" />
        </button>
      </div>
    </div>
  </div>
</>
