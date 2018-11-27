const express = require('express');
const app = express();

app.use(express.static(__dirname + '/www'));

app.listen(8787, () => {
    console.log("http://localhost:8787")
})