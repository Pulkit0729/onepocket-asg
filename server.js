const express = require("express");
const PORT = 3000;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/*", (_req, res) => {
    res.send("Hello World");
});

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}: http://localhost:${PORT}`);
})


