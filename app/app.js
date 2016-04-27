import 'es6-promise';
import 'whatwg-fetch';

// navigator.geolocation.getCurrentPosition(function(position) {
//   do_something(position.coords.(34.74648), position.coords.-92.289609);
// });



.fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=<34.74648>&lon=<-92.289609>&APPID=<75d92f502972a0f9ea05c1163aa5cbf4>&units=imperial`)
.then((response)function {
  console.log(response);
  return response.jason();
})

.then((response)function {
  console.log(response);
});
