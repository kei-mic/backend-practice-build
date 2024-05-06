require("dotenv").config();

const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const corsOptions = {
    // The origin set to * is being set to ANY URL
    origin: "*",
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

async function getMovieData(req, res) {
    const fetchedData = await axios.get(process.env.API_URL);

    res.json(fetchedData.data);
}

app.get("/api", getMovieData);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
