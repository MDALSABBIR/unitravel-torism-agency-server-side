const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello wow to learn express  hello nodmon from my second node server');
});


app.listen(port, () => {
    console.log('Listening to port', port);
});