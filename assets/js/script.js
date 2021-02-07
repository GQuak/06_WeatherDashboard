//Display El Variables
var cityEl = document.getElementById("cityName");
var currentDateEl = document.getElementById("currentDate");
var icon1El = document.getElementById("icon1");
var icon2El = document.getElementById("icon2");
var icon3El = document.getElementById("icon3");
var icon4El = document.getElementById("icon4");
var icon5El = document.getElementById("icon5");
var currentIconEl = document.getElementById("currentIcon");

//Location weather variables
var DateTime = luxon.DateTime;
var now = DateTime.local();
// var today = DateTime.toISODate();
var cityName = "denver";
var todaysWeather = "";
var weeksForecast = "";
var uvIndex = 0;
var day1 = now.plus({ days: 1 });
var day2 = now.plus({ days: 2 });
var day3 = now.plus({ days: 3 });
var day4 = now.plus({ days: 4 });
var day5 = now.plus({ days: 5 });

console.log(day1.toLocaleString(DateTime.DATETIME_MED));
// console.log(DateTime.fromISO('2017-05-15').plus({ months: 2, days: 6 }).toISODate());
console.log(now.toLocaleString(DateTime.DATETIME_MED));



function displayWeather() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.main.temp);
            console.log(data.main.feels_like);

            //Displays on the html page
            // document.getElementById("tempCurrent").textContent = "Temperature: " + data.main.temp;
            if (data) {
                uvDisplay(data);
                updateDisplay(data);
            }
            return;
        });


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&cnt=5&units=imperial&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
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
}



function updateDisplay(currentWeatherData) {
    document.getElementById("currentDate").textContent = now.toLocaleString(DateTime.DATE_SHORT);
    document.getElementById("cityName").textContent = cityName.toUpperCase();
    var currentIcon = JSON.stringify(currentWeatherData.weather[0].icon);
    currentIcon = currentIcon.slice(1, -1);
    currentIconEl.src = "http://openweathermap.org/img/wn/" + currentIcon + "@2x.png";

    document.getElementById("tempCurrent").textContent = "Temperature: " + currentWeatherData.main.temp + " °F";
    document.getElementById("humidityCurrent").textContent = "Humidity: " + currentWeatherData.main.humidity + "%";
    document.getElementById("windCurrent").textContent = "Wind Speed: " + currentWeatherData.wind.speed + " mph";
    return;
}

function forecastDisplay(forecastData) {
    //Next day 1 forecast
    var icon1 = JSON.stringify(forecastData.list[0].weather[0].icon);
    icon1 = icon1.slice(1, -1);
    icon1El.src = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png";
    document.getElementById("date1").textContent = day1.toLocaleString(DateTime.DATE_SHORT);
    document.getElementById("temp1").textContent = "Temp: " + forecastData.list[0].main.temp + " °F";
    document.getElementById("humidity1").textContent = "Humidity: " + forecastData.list[0].main.humidity + "%";

    //Day 2 forecast
    var icon2 = JSON.stringify(forecastData.list[1].weather[0].icon);
    icon2 = icon2.slice(1, -1);
    icon2El.src = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png";
    document.getElementById("date2").textContent = day2.toLocaleString(DateTime.DATE_SHORT);
    document.getElementById("temp2").textContent = "Temp: " + forecastData.list[1].main.temp + " °F";
    document.getElementById("humidity2").textContent = "Humidity: " + forecastData.list[1].main.humidity + "%";

    //Day 3 forecast
    var icon3 = JSON.stringify(forecastData.list[2].weather[0].icon);
    icon3 = icon3.slice(1, -1);
    icon3El.src = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png";
    document.getElementById("date3").textContent = day3.toLocaleString(DateTime.DATE_SHORT);
    document.getElementById("temp3").textContent = "Temp: " + forecastData.list[2].main.temp + " °F";
    document.getElementById("humidity3").textContent = "Humidity: " + forecastData.list[2].main.humidity + "%";

    //Day 4 forecast
    var icon4 = JSON.stringify(forecastData.list[3].weather[0].icon);
    icon4 = icon4.slice(1, -1);
    icon4El.src = "http://openweathermap.org/img/wn/" + icon4 + "@2x.png";
    document.getElementById("date4").textContent = day4.toLocaleString(DateTime.DATE_SHORT);
    document.getElementById("temp4").textContent = "Temp: " + forecastData.list[3].main.temp + " °F";
    document.getElementById("humidity4").textContent = "Humidity: " + forecastData.list[3].main.humidity + "%";

    //Day 5 forecast
    var icon5 = JSON.stringify(forecastData.list[4].weather[0].icon);
    icon5 = icon5.slice(1, -1);
    icon5El.src = "http://openweathermap.org/img/wn/" + icon5 + "@2x.png";
    document.getElementById("date5").textContent = day5.toLocaleString(DateTime.DATE_SHORT);
    document.getElementById("temp5").textContent = "Temp: " + forecastData.list[4].main.temp + " °F";
    document.getElementById("humidity5").textContent = "Humidity: " + forecastData.list[4].main.humidity + "%";
}


function uvDisplay(currentUVData) {
    var lat = currentUVData.coord.lat;
    var long = currentUVData.coord.lon;

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&cnt=5&units=imperial&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
        .then(response => response.json())
        .then(data => {
            console.log("onecall api");
            console.log(data);

            //Displays on the html page
            // document.getElementById("tempCurrent").textContent = "Temperature: " + data.main.temp;
            if (data) {
                displayUV(data.current.uvi);
                document.getElementById("uvCurrent").textContent = data.current.uvi;
                console.log(data.current.uvi);
            }
        });
}

function displayUV(currentUV) {
    //check UV level
    if (currentUV < 3) {
        document.getElementById("uvCurrent").setAttribute("style", "background-color: green");
    }
    else if (currentUV > 2 && currentUV < 6) {
        document.getElementById("uvCurrent").setAttribute("style", "background-color: yellow");
    }
    else if (currentUV > 5 && currentUV < 8) {
        document.getElementById("uvCurrent").setAttribute("style", "background-color: orange");
    }
    else if (currentUV > 7 && currentUV < 11) {
        document.getElementById("uvCurrent").setAttribute("style", "background-color: red");
    }
    else if (currentUV) {
        document.getElementById("uvCurrent").setAttribute("style", "background-color: purple");
    }
    return;
}



//event listener for new city entry
var searchEnter = document.getElementById("searchEnter");

searchEnter.addEventListener("click", function (event) {
    event.preventDefault();
    cityName = document.getElementById("searchInput").value;
    console.log(cityName);
    localStorage.setItem('eight', JSON.stringify(cityName));

    displayWeather();
});

//event listener(s) for previous city searches


displayWeather();