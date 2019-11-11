const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000

app.use('/',require('./routers/index.js'));
app.use('/api',require('./routers/api.js'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,function(err){
  if (err) {
    console.log(err);
  } else {
    console.log(`listen:${PORT}`);
  }
})