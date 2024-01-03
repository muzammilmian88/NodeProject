//Asynchronous Operations

const axios = require('axios');

const urls = ['https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/todos'];

async function downloadContents(urls) {
  try {
    const downloadPromises = urls.map(async (url) => {
      const response = await axios.get(url);
      return response.data;
    });

    const downloadedContents = await Promise.all(downloadPromises);

    return downloadedContents;
  } catch (error) {
    console.error('Error downloading contents:', error.message);
    throw error;
  }
}


downloadContents(urls)
  .then((contents) => {
    console.log('Downloaded contents:', contents);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
