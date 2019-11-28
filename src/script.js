//https://bithacker.dev/fetch-weather-openweathermap-api-javascript

function weatherBallon() {
  const key = "fac9676aa8de6252977e1a8672e861e2";
  fetch()
    .then(function(resp) {
      return resp.json();
    }) //Convert data to json
    .then(function(data) {
      drawWeather(data); // Call drawWeather
    })
    .catch(function() {
      //catch any errors
    });
}
