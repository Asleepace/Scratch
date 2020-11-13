/* GLOBAL CONFIGURATION
 
 This file contains common configuration constants that are use by the api and client,
 which allows us to make changes easily and switch between development and production
 more efficently.
 
 */

const API = {
  PATH: 'http://localhost',
  PORT: '9000'
}

const CLIENT = {
  PORT: '3000'
}

const HOST = `${API.HOST}:${API.PORT}/`

module.exports = {
  API, CLIENT, HOST
} 