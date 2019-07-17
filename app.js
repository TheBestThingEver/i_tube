import express from "express";

const app = express();

const port = (req, res) => {
    console.log("You are on wire.")
}

app.listen(4100, port);