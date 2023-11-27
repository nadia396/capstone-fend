// server.js

let geoapiKey = 'nadiasheikh396';
let weatherBitAPIKey = 'bcdf37b0236148beaf77a198ee3e7137';
let pixApiKey = '40738165-7810322547d1838e4eb2bf383';

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

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })


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


app.get('/geo', async (req, res) => {
  try {
    const response = await axios.get('http://api.geonames.org/searchJSON', {
      params: {
        q: req.query.city,
        maxRows: 1,
        username: geoapiKey
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch geonames data' });
  }
});

app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get('https://api.weatherbit.io/v2.0/', {
      params: {
        latitude: req.query.latitude,
        longitude: req.query.longitude,
        apiKey: weatherBitAPIKey
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.get('/pix', async (req, res) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        searchQuery: req.query.city,
        maxRows : req.query.maxRows || 1,
        apiKey: pixApiKey
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pix data' });
  }
});

// app.get('/pix', async (req, res) => {
//   try {
//     const maxRows = req.query.maxRows || 1;
//     const searchQuery = req.query.q;
//     const apiKey = pixApiKey; // Replace with your actual Pixabay API key

//     const response = await axios.get('https://pixabay.com/api/', {
//       params: {
//         q: searchQuery,
//         key: apiKey,
//         per_page: maxRows
//       }
//     });

//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch pix data' });
//   }
// });


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
    country: request.body.country,
    temperature: request.body.temperature,
    description: request.body.description
  };
  console.log("nadia");
  console.log(projectData);
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