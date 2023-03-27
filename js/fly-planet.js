const planet01 = document.querySelector('.fly-planet_01');
const planet02 = document.querySelector('.fly-planet_02');
const container = document.querySelector('.first-space-section');
// const factor = 1 / 10;

let timeOld, timeElapsed;
let x = 0, y = 0;
// let step = 1;

let cH = container.offsetHeight;
let cW = container.offsetWidth;

function movement(planet, sign, factor, step) {
  let width = planet.offsetWidth;
  let height = planet.offsetHeight;

  let dx = step;
let dy = step;

  requestAnimationFrame(movePlanet);

  // check the planet position and set the direction if out of bounds
  function checkPlanet() {
    if (x + width >= cW) dx = -step;
    if (x <= 0) dx = step;
    if (y + height >= cH) dy = -step;
    if (y <= 0) dy = step;
  }

  // move the planet by (dx,dy)
  function movePlanet(timestamp) {
    // measure the time elapsed since 
    // last call to movePLanet function
    if (!timeOld) timeOld = timestamp;
    timeElapsed = timestamp - timeOld;
    timeOld = timestamp;

    // calculate planet's position based on 
    // movement's direction and time elapsed
    x += dx * timeElapsed * factor;
    y += dy * timeElapsed * factor;

    planet.style.transform = "translate(" + x * sign + "px, " + y * sign + "px)";

    checkPlanet();
    requestAnimationFrame(movePlanet);
  }
}

movement(planet01, 1, 1/10, 1);
movement(planet02, -1, 1/5, 1);