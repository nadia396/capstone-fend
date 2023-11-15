//import { attachEventListeners } from './eventListener.js';

/* Global Variables */
// let apiKey = 'aa5dcd0cd2b36055f1ac56f5b3735a76&units=imperial';

let apiKey = 'nadiasheikh396';

// Base URL for the OpenWeatherMap API
//let baseURL = 'https://api.openweathermap.org/data/2.5/weather';
let gbaseURL = 'http://api.geonames.org/searchJSON';

const url = 'http://localhost:3000/data';
gi
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();


//listener for the element with the id: generate, with a callback function to execute when it is clicked.
document.getElementById('generate').addEventListener('click', performAction);
//attachEventListeners();


// const getWeather = async (baseURL, zip, key) => {

// 	const res = await fetch(`${baseURL}?zip=${zip}&appid=${key}`);
// 	try {

// 		const data = await res.json();
// 		const temp = data.main.temp;
// 		const weatherData = {
// 			temperature: temp,
// 			date: newDate
// 		};
// 		console.log(weatherData)
// 		return weatherData;
// 	} catch (error) {
// 		console.log("error", error);
// 		// appropriately handle the error
// 	}
// }

const getGeonames = async (gbaseURL, city, key) => {
	const res = await fetch(`${gbaseURL}?q=${city}&maxRows=1&username=${key}`);
	try {
	  const data = await res.json();
	  const latitude = data.geonames[0].lat;
	  const longitude = data.geonames[0].lng;
	  const country = data.geonames[0].countryName;
  
	  const geonamesData = {
		latitude: latitude,
		longitude: longitude,
		country: country
	  };
	  console.log(geonamesData);
	  return geonamesData;
	} catch (error) {
	  console.log("error", error);
	  // appropriately handle the error
	}
  };

const postData = async (url = '', data = {}) => {
	// console.log(data);
	console.log(url);
	const response = await fetch("http://localhost:3000/data", {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	try {
		console.log("AMAN")
		console.log(response)
		const newData = await response.json();
		console.log(newData);
		return newData;
	} catch (error) {
		console.log("error", error);
	}
}


const updateUI = async () => {
	const request = await fetch('/data');
	try {
		const allData = await request.json();
		console.log(allData);
		// document.getElementById('temp').innerHTML = Math.round(allData.temp) + 'degrees';
		// document.getElementById('date').innerHTML = allData.date;
		// document.getElementById('content').innerHTML = allData.feelings;
		document.getElementById('latitude').innerHTML = allData.latitude;
		document.getElementById('longitude').innerHTML = allData.longitude;
		document.getElementById('country').innerHTML = allData.country;
	} catch (error) {
		console.log("error", error);
		// Handle any errors
	}
};

//callback function  to call  async GET request with the parameters
import { attachEventListeners } from './eventListener';
	
// function performAction(e) {
// 	attachEventListeners();

// 	const newZip = document.getElementById('zip').value;
// 	const feelings = document.getElementById('feelings').value;
  
// 	getWeather(baseURL, newZip, apiKey)
// 	  .then(weatherData => {
// 		postData('/data', {
// 		  temp: weatherData.temperature,
// 		  date: weatherData.date,
// 		  feelings: feelings
// 		});
// 	  })
// 	  .then(updateUI)
// 	  .catch(error => {
// 		console.log("error", error);
// 	  });
//   }
  
function performAction(e) {
	attachEventListeners();
  
	const newCity = document.getElementById('city').value;
	
	getGeonames(gbaseURL, newCity, apiKey)
	  .then(geonamesData => {
		postData('/data', {
		  latitude: geonamesData.latitude,
		  longitude: geonamesData.longitude,
		  country: geonamesData.country,
		  
		});
	  })
	  .then(updateUI)
	  .catch(error => {
		console.log("error", error);
	  });
  }

  
  export { getGeonames,postData, updateUI, performAction };