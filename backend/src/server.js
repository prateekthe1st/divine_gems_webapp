const express = require('express');
const cors = require('cors');
const db = require('./functions/db');

const app = express();

app.disable('x-powered-by');

app.use(express.json());
app.use(cors());

const routes = require('./routes/index');
app.use('/api', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
})