//app.js
//import { attachEventListeners } from './eventListener.js';

/* Global Variables */
let geoapiKey = 'nadiasheikh396';
let weatherBitAPIKey = 'bcdf37b0236148beaf77a198ee3e7137';
let pixApiKey = '40738165-7810322547d1838e4eb2bf383';

// Base URL for the OpenWeatherMap API
//let baseURL = 'https://api.openweathermap.org/data/2.5/weather';
let geoBaseURL = 'http://api.geonames.org/searchJSON';
let weatherBitBaseURL = 'https://api.weatherbit.io/v2.0/';
let pixBaseURL = 'https://pixabay.com/api/';

const url = 'http://localhost:3000/data';
let maxRows = 1; 


//listener for the element with the id: generate, with a callback function to execute when it is clicked.
document.getElementById('generate').addEventListener('click', performAction);
//attachEventListeners();


const getGeonames = async (geoBaseURL, city, key) => {
	const res = await fetch(`${geoBaseURL}?q=${city}&maxRows=1&username=${key}`);
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
		//console.log(geonamesData);
		return geonamesData;
	} catch (error) {
		console.log("error", error);
		// appropriately handle the error
	}
};

// Create a new date instance dynamically with JS
const tripDateInput = document.getElementById('tripDate');
const tripDate = tripDateInput.value;

const currentDate = new Date();
const selectedDate = new Date(tripDate);
const timeDifference = selectedDate.getTime() - currentDate.getTime();
const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

const countdownElement = document.getElementById('tripDate');
countdownElement.textContent = `Your trip is in ${remainingDays} days!`;


const getWeatherBit = async (weatherBitBaseURL, latitude, longitude, apiKey) => {
// const getWeatherBit = async (geoData) => {
// 	const weatherApiUrl = `http://localhost:3000/weather?lat=${geoData.lat}&lon=${geoData.lon}`;
// 	const response = await fetch(weatherApiUrl);
  
    // Format the date to YYYY-MM-DD
	const formattedDate = currentDate.toISOString().split('T')[0]; // Format the date to YYYY-MM-DD

	// Construct the URL for the API request
	const forecastWeatherURL = `${weatherBitBaseURL}forecast/daily?lat=${latitude}&lon=${longitude}&key=${apiKey}&start_date=${formattedDate}&end_date=${formattedDate}`;

	try {
		// Make the API request
		const response = await fetch(forecastWeatherURL);

		// Parse the response as JSON
		const data = await response.json();

		// Extract the relevant weather information
		const temperature = data.data[0].temp;
		const description = data.data[0].weather.description;


		const weatherbitData = {
			temperature: temperature,
			description: description
		};
		console.log(weatherbitData);
		return weatherbitData;

	} catch (error) {
		console.log('Error:', error);
		// Handle any errors that occur during the API request
		throw new Error('Failed to fetch weather data from Weatherbit API');
	}
};


const getPix = async (pixBaseURL,searchQuery,maxRows, pixApiKey) => {
	const res = await fetch(`${pixBaseURL}?q=${searchQuery}&maxRows=${maxRows}&key=${pixApiKey}`);
   try {
		const data = await res.json();
		const imageURL = data.hits[0].webformatURL;
		console.log('Image URL:', imageURL);
		return imageURL;
	} catch (error) {
		throw new Error('Failed to fetch image data from Pixabay API');
		// appropriately handle the error
	}
};



// Helper function to format the date to YYYY-MM-DD
const formatDate = (date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};

const postData = async (url = '', data = {}) => {
	// console.log(data);
	// console.log(url);
	const response = await fetch("http://localhost:3000/data", {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	try {
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
		console.log("NADAI");
		console.log(allData);
		document.getElementById('latitude').innerHTML = allData.latitude;
		document.getElementById('longitude').innerHTML = allData.longitude;
		document.getElementById('country').innerHTML = allData.country;
		document.getElementById('temperature').innerHTML = allData.temperature;
		document.getElementById('description').innerHTML = allData.description;

	
		// Create an <img> element and set its src attribute to the retrieved image URL
		const imageElement = document.createElement('img');
		imageElement.src = allData.imageURL;
	
		// Append the image element to the 'image' element in the HTML
		const imageContainer = document.getElementById('image');
		imageContainer.innerHTML = '';
		imageContainer.appendChild(imageElement);
	
	} catch (error) {
		console.log("error", error);
		// Handle any errors
	}
};


//callback function to call async GET request with the parameters
import { attachEventListeners } from './eventListener';



function performAction(e) {
	attachEventListeners();

	const newCity = document.getElementById('city').value;

	getGeonames(geoBaseURL, newCity, geoapiKey)
		.then(geonamesData => {
			postData('/data', {
				latitude: geonamesData.latitude,
				longitude: geonamesData.longitude,
				country: geonamesData.country,

			});
			console.log(geonamesData);

			return geonamesData; // Return geonamesData to the next .then() block
		})
		.then(geonamesData => {
			// Call getWeatherBit function with the required parameters
			return getWeatherBit(weatherBitBaseURL, geonamesData.latitude, geonamesData.longitude, weatherBitAPIKey);
		})
		.then(() => {
			return getPix(pixBaseURL, newCity, maxRows, pixApiKey);
		  })
		.then(imageURL => {
			// Do something with the imageURL, such as displaying the image on the UI
			console.log('Image URL:', imageURL);
		  })
		.then(updateUI)
		.catch(error => {
			console.log("error", error);
		});
}


export { getGeonames, getWeatherBit, getPix, postData, updateUI, performAction };