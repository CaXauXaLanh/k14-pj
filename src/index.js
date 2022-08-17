const path = require('path')
const cookieParser = require('cookie-parser')
const express = require('express')
const { engine } = require("express-handlebars");
const { dirname } = require('path');
const app = express()
const port = 3000
const route = require('./routes')
const db = require("./config/db")
const cors = require('cors')
const mongoose = require('mongoose')
const helpers = require('handlebars-helpers')();

app.use(express.urlencoded());
app.use(cookieParser())
app.use(cors())
app.use(express.json())
//connect db
// db.connect()
mongoose.connect('mongodb://localhost:27017/news-Web',() => {
    console.log('Conenct thanh cong')
})
//cau hinh file tinh
app.use(express.static(path.join(__dirname,'/public/')));

//template engine
app.engine('hbs', engine({
  extname: '.hbs',
  //global helper
  helpers: {
    each_upto: (ary,max,options) => {
      if(!ary || ary.length == 0)
        return options.inverse(this);
      var result = [];
      for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
      return result.join('');
    },
    each_from_to: (ary,min,max,options) => {
      if(!ary || ary.length == 0)
        return options.inverse(this);
      var result = [];
      for (var i = min; i <= max && i < ary.length; i++)
        result.push(options.fn(ary[i]));
      return result.join('');
    },
    sum: (a, b) => {
      return a + b
    }
  },
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//route
route(app)

//listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})