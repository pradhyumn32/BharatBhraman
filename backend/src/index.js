const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const placeRouter = require('../routes/place.routes');
const cityRouter = require('../routes/cities.routes');
const homeSSR = require('../routes/ejshome.routes');
require('dotenv').config();

// Server
const server = express();
server.use(cors());
server.use(express.json());
server.use(morgan("default"));

// DON'T TOUUCH THIS (I WILL SKIN YOU ALIVE🙂)
async function mongooseConnect() {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to Database");
}

mongooseConnect().catch((error) => console.log(error));

// Server Side Rendering:
server.use("/", homeSSR.ejshomeRouter);

// API routing:
server.use("/api/v1/place", placeRouter.placeRouter);
server.use("/api/v1", cityRouter.cityRouter);

server.listen(process.env.PORT);