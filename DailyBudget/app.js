var express = require('express');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();
app.use(morgan('combined'));

app.get('/', function(req, res){
    console.debug('response');
    res.send('hello yoll');
})

app.listen(3000, function(){
    debug('listen on port 3000');
});
