const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "e9d2425205449692e78582ad45446c8f";

//function
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //calling url 서버의 응답을 기다려야 한다.
}

function onGeoError() {
  alert("I can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //위치 정보를 받을 수 있는 함수. 모든게 잘 됐을 때 실행할 함수/실패했을때 실행할 함수가 필요하다.
