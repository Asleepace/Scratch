// GLOBAL CONFIGURATION
// This file contains common configuration constants that are use by the api and client,
// which allows us to make changes easily and switch between development and production
// more efficently.


// EXPRESS SERVER CONFIG
const API = {
  PATH: 'http://localhost',
  PORT: '9000'
}

// REACT APPLICATION CONFIG
const CLIENT = {
  PORT: '3000',
  NAME: 'Phoenix'
}

// COMBINED GLOBAL CONFIG
module.exports = {
  API, CLIENT, HOST: `${API.HOST}:${API.PORT}/`
} 