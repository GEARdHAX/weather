fetch(
 "https://api.openweathermap.org/data/2.5/weather?q=bengaluru&units=metric&appid=71c16ef8cd8643e199d96cf766e59e85"
)
 .then((response) => response.json())
 .then((result) => {
  console.log(result.coord.lon, " ", result.coord.lat);
  console.log(result.name);
  console.log(result.main.temp);
  console.log(result.main.temp_min, " ", result.main.temp_max);
  console.log();
  console.log(result.main.pressure);
  console.log(result.main.humidity);
 });
