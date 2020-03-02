const PORT = process.env.PORT || 3000;

const ENVIRONMENT = process.env.NODE_ENV || 'dev';


// BD

var URLDB;
if(ENVIRONMENT === 'dev'){
  URLDB = 'mongodb://localhost:27017/tentop';
}else{
  URLDB = process.env.MONGO_URI;
}


module.exports = {
  

  PORT,
  ENVIRONMENT,
  URLDB

}