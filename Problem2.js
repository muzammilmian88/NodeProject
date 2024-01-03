//Error Handling

const axios = require('axios');

  const apiEndpoint = 'https://jsonplaceholder.typicode.com/users/10';

async function fetchDataFromApi(apiEndpoint) {
  try {
             const response = await axios.get(apiEndpoint);


    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
        console.error(`Unexpected status code: ${response.status}`);

        throw new Error('Unexpected status code');
    }
  } catch (error) {
    if (error.response) {

      console.error(`Error response from server: ${error.response.status}`);



      throw new Error('eror response from server');
    } else if (error.request) {
     
      console.error('No response Received from the server');




      throw new Error('No response Received from the server');
    } else {

      console.error('Error setting up the request:', error.message);
      throw error;
    }
  }
}

fetchDataFromApi(apiEndpoint)
  .then((data) => {
    console.log('Data from API:', data);
  })
  .catch((error) => {
    console.error('Error fetching data from API:', error.message);
  });
