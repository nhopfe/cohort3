import { City, Community } from './classes.js'
import functions from './cities.js'

const url = 'http://localhost:5000/';



export const serverFunctions = {
  
   postData: async (url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
  },

  getData: async () => {
    const response = await fetch(url + 'all');
    const myJson = await response.json();
    return myJson;
  },

  getDataOnStart: async (community, parent) => {
    const server = await serverFunctions.getData()
    let biggest = 0;
    server.forEach((element) => {
      if (biggest < element.key) {
        biggest = element.key;
      }
    })  
    server.forEach((element) => {
      const name = element.name;
      const lat = element.latitude;
      const long = element.longitude;
      const pop = element.population;
      const key = element.key;
      functions.createCityDiv(parent, name, key);
      const a = new City(name, lat, long, pop, key);
      community.cities[`key${key}`] = a;
    })
    community.counter = biggest;
  },

  addServerCity: async (cityObj) => {
    const response = await serverFunctions.postData(url + 'add', cityObj)
    return response;
  },

  readServer: async (key) => {
    const response = await serverFunctions.postData(url + 'read', key);
    return response;
  },

  deleteServerCity: async (key) => {
    const response = await serverFunctions.postData(url + 'delete', key);
    return response;
  },

  updateServer: async (obj) => {
    const response = await serverFunctions.postData(url + 'update', obj);
    return response;
  }

}
