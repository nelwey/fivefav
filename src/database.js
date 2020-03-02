const mongoose = require('mongoose');
const env = require('./config/config');


mongoose.connect(env.URLDB,{
  useUnifiedTopology:true,
  useNewUrlParser:true,
  useCreateIndex:true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));