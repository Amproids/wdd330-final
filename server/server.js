const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../client/dist'))); 

// Handle the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
  });

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port: ${port}`);
});

const { exec } = require('child_process');

app.post('/webhook', (req, res) => {
    res.sendStatus(200);
    //FOR SOME STUPID REASON THIS NEEDS TO NOT CHECK ERRORS IN ORDER TO WORK
    exec('cd /home/andrew/myfitnessfriendnet && ./stop.sh && cd /home/andrew/myfitnessfriendnet && ./start.sh');
});