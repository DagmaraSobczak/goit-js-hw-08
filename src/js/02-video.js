import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('vimeo-player');

function saveCurrentTimeToLocalStorage(currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
}
const throttledSaveCurrentTimeToLocalStorage = throttle(
  saveCurrentTimeToLocalStorage,
  1000
);
player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  throttledSaveCurrentTimeToLocalStorage(currentTime);
});
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
