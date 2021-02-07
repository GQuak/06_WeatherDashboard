# 06_WeatherDashboard
Build a page that will allow users to search for a city and then display the current and forecasted weather for the selected cities utilizing the openweathermap.org api.

DESCRIPTION
The goal of this project was to create a webpage where a user can enter different cities and see the current weather as well as a five day forecast. 

I utilize the cityName variable to customize the api request URL's and then chained the latitude and longitude from one of the initial api requests to pull the UV index value. Once the api data is loaded it is rendered on the page utilizing data from all three api requests. 

If the user enters a valid city in the text input on the left side of the page, then the cityName variable is updated and new api requests are initiated and the new weather data is displayed as well as displaying the searched city under the input field on the left side of the page. The city is also saved into an array in localStorage.

Once there are previous city results on the left side of the screen, the user is able to select a city name and it will update the weather data to show for that city.

If the user refreshes the page, the page loads that last city searched and displays it's weather and forecast. Then when they search a new city it clears the array and saves the new searched cities.

To view the random password generator visit gquak.github.io/06_weatherdashboard/


INSTALLATION
Open the webpage and then use the text entry field on the left to search for cities and see their weather.

USAGE
When you open the index.html file, a small webpage should look similar to this screenshot: <img width="1110" alt="HW06_WeatherSearch" src="https://user-images.githubusercontent.com/75180482/107162116-4f1bdb00-695e-11eb-8bd8-8e2fd539f591.png">

CREDITS
This project was developed for use in the University of Denver's Coding Bootcamp by Gabe Quakkelaar.
Weather information provided by Open Weather Map API, learn more at: https://openweathermap.org/api


MIT LICENSE

Copyright (c) 2021 Gabe Quakkelaar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
