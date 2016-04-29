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



    document.querySelector(".lownumberone").textContent = response.list[1].temp.min;
    document.querySelector(".highnumberone").textContent = response.list[1].temp.max;

    document.querySelector(".lownumbertwo").textContent = response.list[2].temp.min;
    document.querySelector(".highnumbertwo").textContent = response.list[2].temp.max;

    document.querySelector(".lownumberthree").textContent = response.list[3].temp.min;
    document.querySelector(".highnumberthree").textContent = response.list[3].temp.max;

    document.querySelector(".lownumberfour").textContent = response.list[4].temp.min;
    document.querySelector(".highnumberfour").textContent = response.list[4].temp.max;

    document.querySelector(".lownumberfive").textContent = response.list[5].temp.min;
    document.querySelector(".highnumberfive").textContent = response.list[5].temp.max;

    document.querySelector(".lownumbersix").textContent = response.list[6].temp.min;
    document.querySelector(".highnumbersix").textContent = response.list[6].temp.max;
  });

});
