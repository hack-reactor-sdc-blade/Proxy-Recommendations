const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use('/:room', express.static(path.join(__dirname, '../public')));
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})
