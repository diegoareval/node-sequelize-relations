const bodyParser = require('body-parser');
const express = require('express');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

require('./server/routes')(app);

const PORT = 3456;
app.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`)
})