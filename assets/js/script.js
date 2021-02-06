//Display El Variables
var tempCurrentEl = "";


//Location weather variables
var cityName = "denver";
var todaysWeather = "";
var weeksForecast = "";
var uvIndex = 0;

// var cityList = document.querySelector("list-group-item");
// var cityResult = document.querySelector();



// fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
//     .then(response => response.json())
//     .then(data => console.log(data));

// fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
//     .then(response => response.json())
//     .then(data => console.log(data));

function displayWeather() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.main.temp);
            console.log(data.main.feels_like);

            //Displays on the html page
            // document.getElementById("tempCurrent").textContent = "Temperature: " + data.main.temp;
            if (data) {
                updateDisplay(data);
            }
            return;
        });


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&cnt=5&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
        .then(response => response.json())
        .then(data => {
            console.log(data.list.length);
            console.log(data);

            //Displays on the html page
            // document.getElementById("tempCurrent").textContent = "Temperature: " + data.main.temp;
            if (data) {
                forecastDisplay(data);
            }
            return;
        });

    function updateDisplay(currentWeatherData) {
        document.getElementById("tempCurrent").textContent = "Temperature: " + currentWeatherData.main.temp;
        document.getElementById("humidityCurrent").textContent = "Humidity: " + currentWeatherData.main.humidity;
        document.getElementById("windCurrent").textContent = "Wind Speed: " + currentWeatherData.wind.speed;
        return;
    }

    function forecastDisplay(forecastData) {
        //Next day 1 forecast
        document.getElementById("temp1").textContent = "Temp: " + forecastData.list[0].main.temp;
        document.getElementById("humidity1").textContent = "Humidity: " + forecastData.list[0].main.humidity + "%";

        //Day 2 forecast
        document.getElementById("temp2").textContent = "Temp: " + forecastData.list[1].main.temp;
        document.getElementById("humidity2").textContent = "Humidity: " + forecastData.list[1].main.humidity + "%";

        //Day 3 forecast
        document.getElementById("temp3").textContent = "Temp: " + forecastData.list[2].main.temp;
        document.getElementById("humidity3").textContent = "Humidity: " + forecastData.list[2].main.humidity + "%";

        //Day 4 forecast
        document.getElementById("temp4").textContent = "Temp: " + forecastData.list[3].main.temp;
        document.getElementById("humidity4").textContent = "Humidity: " + forecastData.list[3].main.humidity + "%";

        //Day 5 forecast
        document.getElementById("temp5").textContent = "Temp: " + forecastData.list[4].main.temp;
        document.getElementById("humidity5").textContent = "Humidity: " + forecastData.list[4].main.humidity + "%";

    }
}



//event listener for new city entry


//event listener(s) for previous city searches


displayWeather();