const express = require('express');
const hbs = require('hbs');
const port=process.env.PORT||3000;

var app =express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
   return new Date().getFullYear();
});

app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle:'Home page',
    welcomeMessage:'Welcome to my website'
  })
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
      pageTitle:'about page'
    });
});

app.listen(port,()=>{
  console.log('Server starting up ...');
})
