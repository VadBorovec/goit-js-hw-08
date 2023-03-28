import Player from '@vimeo/player';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

//* Save playback time to local storage on timeupdate event
function getTime({ seconds }) {
  localStorage.setItem(TIME_KEY, seconds);
}

player.on('timeupdate', getTime);

//* Resume playback from saved position on page reload
player.setCurrentTime(parseFloat(localStorage.getItem(TIME_KEY)) || 0);
