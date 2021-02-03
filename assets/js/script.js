//Display El Variables



//Location weather variables
var cityName = "denver";
var todaysWeather = "";
var weeksForecast = "";

// var cityList = document.querySelector("list-group-item");
// var cityResult = document.querySelector();



// fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
//     .then(response => response.json())
//     .then(data => console.log(data));

// fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
//     .then(response => response.json())
//     .then(data => console.log(data));


fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.main.temp);
        console.log(data.main.feels_like);
    });


fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&cnt=5&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
    .then(response => response.json())
    .then(data => {
        console.log(data.list.length);
        weeksForecast = data.list.length;
    });

console.log("Forecast length: " + weeksForecast);

//event listener for new city entry


//event listener(s) for previous city searches

