import 'es6-promise';
import 'whatwg-fetch';

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position);
  fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=75d92f502972a0f9ea05c1163aa5cbf4&units=imperial`)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);

    document.querySelector(".city").textContent = response.city.name;
    document.querySelector(".fewclouds").textContent = response.list[0].clouds;
    document.querySelector(".deg").textContent = response.list[0].temp.day;
    document.querySelector(".dayone").textContent = response.list[0].dt;
    document.querySelector(".daytwo").textContent = response.list[1].dt;
    document.querySelector(".daythree").textContent = response.list[2].dt;
    document.querySelector(".dayfour").textContent = response.list[3].dt;
    document.querySelector(".dayfive").textContent = response.list[4].dt;
    document.querySelector(".daysix").textContent = response.list[5].dt;
  });

});
