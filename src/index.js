// importing packages
const express = require('express')
const prizeRouter = require('./routers/prize');
const cors = require('cors');

const port = 3000;

const app = express();

// registering middleware functions
app.use(cors());
app.use(express.json());
app.use(prizeRouter);

// starting the server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
});