// let apiKey = 'aa5dcd0cd2b36055f1ac56f5b3735a76&units=imperial';
let apiKey = 'nadiasheikh396';


// Setup empty JS object to act as endpoint for all routes
let projectData = {};



// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');

// Cors for cross origin allowance
const cors = require('cors');

const axios = require('axios');

const fetch = require('node-fetch');

// Start up an instance of app
const app = express();
app.use(cors());

/*Dependencies*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('dist'));


const port = 3000;
// Setup Server

const server = app.listen(port, listening);
function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};


// app.get('/weather', async (req, res) => {
//     try {
//       const response = await axios.get('http://api.geonames.org/searchJSON', {
//         params: {
//           zip: req.query.zip,
//           appid: 'apiKey',
//           units: 'imperial'
//         }
//       });
      
//       res.json(response.data);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch weather data' });
//     }
//   });

app.get('/geo', async (req, res) => {
  try {
    const response = await axios.get('http://api.geonames.org/searchJSON', {
      params: {
        q: req.query.city,
        maxRows: 1,
        username: apiKey
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});



//Add GET route that returns the projectData object 
app.get('/data', sendData);

function sendData(request, response) {
    response.send(projectData);
};

//Add a POST route that adds incoming data to projectData
app.post('/data', addData);

function addData(request, response) {
    projectData = {
        latitude: request.body.latitude,
        longitude: request.body.longitude,
        country: request.body.country
    };
    //response.send('{\r\n\t\"response\": \"Data added successfully!\"\r\n}');
    response.json({ response: "Data added successfully!" });
};

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send('404: Page not found');
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500: Internal Server Error');
  });