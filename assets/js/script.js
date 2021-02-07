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
var cityName = "denver";
var cityArray = [];
var uvIndex = 0;

//Date-Time variables
var DateTime = luxon.DateTime;
var now = DateTime.local();
var day1 = now.plus({ days: 1 });
var day2 = now.plus({ days: 2 });
var day3 = now.plus({ days: 3 });
var day4 = now.plus({ days: 4 });
var day5 = now.plus({ days: 5 });

//Other Variables
var searchEnter = document.getElementById("searchEnter");
var cityHistory = document.getElementById("list");
var input = document.getElementById("searchInput");


//Display weather for selected city
function displayWeather() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
        .then(response => response.json())
        .then(data => {
            if (data) {
                uvDisplay(data);
                updateDisplay(data);
            }
            return;
        })
        .catch(error => window.alert("Please enter a valid city"));


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&cnt=5&units=imperial&APPID=59e0682cd6b4256b2f3d0ccfb3eb5edf')
        .then(response => response.json())
        .then(data => {
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
            //Displays on the html page
            if (data) {
                displayUV(data.current.uvi);
                document.getElementById("uvCurrent").textContent = data.current.uvi;
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
searchEnter.addEventListener("click", function (event) {
    event.preventDefault();
    if (document.getElementById("searchInput").value) {
        cityName = document.getElementById("searchInput").value;
        document.getElementById("searchInput").value = "";
        cityArray.push(cityName);
        localStorage.setItem('cities', JSON.stringify(cityArray));
    }
    else {
        window.alert("Enter a city to see their weather");
    }

    citySearch();
    displayNewCity();
});

//Get new city on enter keystroke
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("searchEnter").click();
    }
});


function citySearch() {
    var citySearchValue = document.createElement("li");
    citySearchValue.textContent = cityName.toUpperCase();
    citySearchValue.classList.add("searchResults");
    cityVariable = cityName.split(" ").join("");
    citySearchValue.id = cityVariable;
    cityHistory.prepend(citySearchValue);
}

function displayNewCity() {
    var pastCity = JSON.parse(localStorage.getItem("cities"));

    if (pastCity !== null) {
        pastCityLength = pastCity.length - 1;
        cityName = pastCity[pastCityLength];

    }

    displayWeather();
}


//event listener(s) for previous city searches
const ul = document.getElementById('list');

function clickCity(evt) {
    // e.target refers to the clicked <li> element
    // This is different than e.currentTarget, which would refer to the parent <ul> in this context
    cityName = evt.target.textContent;
    displayWeather();
}

ul.addEventListener('click', clickCity, false);


function getSavedCities() {
    var pastCity = JSON.parse(localStorage.getItem("cities"));

    if (pastCity !== null) {
        pastCityLength = pastCity.length - 1;
        cityName = pastCity[pastCityLength];
    }
}
getSavedCities();
displayWeather();