const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running perfectly on ${PORT}`));