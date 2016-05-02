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
    document.querySelector(".daysix").textContent = response.list[5].dt;

    let days = response.list;
    let day;
    days.forEach((day) => {
      let date = new Date(day.dt * 1000);
      let dayOfWeek = date.getDay();

      let iconCode = response.list[0].weather[0].icon;
      let iconCodeUrl = `http://openweathermap.org/img/w/${iconCode}.png`

      let img = document.createElement("img");
      img.src = iconCodeUrl;

      document.querySelector('.clouddiv').appendChild(img);

      document.querySelector('.clouddiv').appendChild(img);


      let dayOfWeekName
          switch (dayOfWeek) {
            case 0:
              dayOfWeekName = "Monday";
              break;
            case 1:
              dayOfWeekName = "Tuesday";
              break;
            case 2:
              dayOfWeekName = "Wednesday";
              break;
            case 3:
              dayOfWeekName = "Thursday";
              break;
            case 4:
              dayOfWeekName = "Friday";
              break;
            case 5:
              dayOfWeekName = "Saturday";
              break;
            case 6:
              dayOfWeekName = "Sunday";
              break;
            default:
              dayOfWeekName = "Invalid Day";
              break;
          }


          document.querySelector(".dayone").textContent = "Monday";
          document.querySelector(".daytwo").textContent = "Tuesday";
          document.querySelector(".daythree").textContent = "Wednesday";
          document.querySelector(".dayfour").textContent = "Thursday";
          document.querySelector(".dayfive").textContent = "Friday";
          document.querySelector(".daysix").textContent = "Saturday";
    });



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
