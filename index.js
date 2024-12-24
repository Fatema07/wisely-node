const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3333;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

  const url = 'https://api.wise.com/v1/rates?source=GBP&target=USD';
  const headers = {
    'Authorization': 'Basic OGNhN2FlMjUtOTNjNS00MmFlLThhYjQtMzlkZTFlOTQzZDEwOjliN2UzNmZkLWRjYjgtNDEwZS1hYzc3LTQ5NGRmYmEyZGJjZA=='
  };
  
  // Your endpoint to fetch currency exchange rate
app.get('/get-current', async (req, res) => {
  try {
      const response = await axios.get(url, { headers });
      res.json(response.data);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data');
  }
});

// Your endpoint to fetch currency exchange rate
app.get('/history-live', async (req, res) => {
    try {
        const response = await axios.get('https://wise.com/rates/history+live?source=USD&target=GBP&length=2&resolution=hourly&unit=day');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});