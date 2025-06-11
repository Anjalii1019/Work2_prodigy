let startTime, updatedTime, difference = 0, tInterval;
let running = false;
let lapCounter = 0;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);

  return (
    (hrs < 10 ? '0' + hrs : hrs) + ':' +
    (mins < 10 ? '0' + mins : mins) + ':' +
    (secs < 10 ? '0' + secs : secs)
  );
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  display.textContent = timeToString(difference);
}

function startStop() {
  if (!running) {
    startTime = new Date().getTime() - difference;
    tInterval = setInterval(updateTime, 1000);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(tInterval);
  display.textContent = '00:00:00';
  difference = 0;
  running = false;
  lapCounter = 0;
  laps.innerHTML = '';
}

function lap() {
  if (running) {
    lapCounter++;
    const li = document.createElement('li');
    li.textContent = `Lap ${lapCounter}: ${timeToString(difference)}`;
    laps.appendChild(li);
  }
}
