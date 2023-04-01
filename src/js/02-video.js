import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// * Зберігає час відтворення до localStorage під час події 'timeupdate'
function getTime({ seconds }) {
  localStorage.setItem(TIME_KEY, seconds);
}

player.on('timeupdate', throttle(getTime, 1000));

// * Відновлює відтворення зі збереженої позиції при перезавантаженні сторінки
player.setCurrentTime(parseFloat(localStorage.getItem(TIME_KEY)) || 0);
