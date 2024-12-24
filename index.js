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

const options = {
    method: 'GET',
    url: '	https://api.wise.com/v1/rates?source=GBP&target=USD',
    params: {
      source: 'USD',
      target: 'GBP',
      length: 2,
      resolution: 'hourly',
      unit: 'day'
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:133.0) Gecko/20100101 Firefox/133.0',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Referer': 'https://wise.com/gb/currency-converter/usd-to-gbp-rate?amount=1',
      'Content-Type': 'application/json',
      'Alt-Used': 'wise.com',
      'Connection': 'keep-alive',
      'Cookie': 'appToken=dad99d7d8e52c2c8aaf9fda788d8acdc; gid=52c979f0-5c2b-4c4b-9ce0-34fd1df2efa4; __cf_bm=.daKmOTK38M47rARGa8OgKDUJcOZ0osJjaRsUsGe7TA-1734937891-1.0.1.1-OXKv.2OaX2AEbj6caRY3jL0TizRASJL0v6XBLU3RKqF.RGtf80k7WTjOPv9gI0MYXXyRD1i3V_JNTnK1m.1bFdNE32.fxE..nNBtLJkprtk',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Priority': 'u=0'
    }
  };
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