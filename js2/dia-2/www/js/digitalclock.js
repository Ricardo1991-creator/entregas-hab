const clock = document.querySelector("header h1");
const greeting = document.querySelector("header h2");

//añade un 0 al numero si es menor que 10
function format(number) {
  if (number >= 10) return number;
  return "0" + number;
}

function writeClock() {
  const now = new Date();

  const hours = format(now.getHours());
  const minutes = format(now.getMinutes());
  const seconds = format(now.getSeconds());

  clock.textContent = `
    ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  greeting.textContent = getGreeting(now.getHours());
}

function getGreeting(hour) {
  if (hour < 6 || hour > 20) return "Buenas noches";
  if (hour < 12) return "buenos días";
  return "Buenas tardes";
}

writeClock();
setInterval(writeClock, 1000);
