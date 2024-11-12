const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send({
        status: "OK",
        code: 200,
    });
});

app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
});