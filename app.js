const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

// Connect to a database
const dbURL = 'mongodb+srv://netninja:test1234@cluster0.krott.mongodb.net/node_ninja?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true , useUnifiedTopology: true})
    .then((result)=> app.listen(3000))
    .catch(err => console.log(err))
//register view engine
app.set('view engine','ejs')
//app.set('view','myviews')

// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    //res.send('<p>Home Page</p>')
    res.redirect('/blogs')
    
})

app.get('/about',(req,res)=>{
   // res.send('<p>About Page</p>')
   //res.sendFile('./views/about.html', {root: __dirname})
   res.render('about',{title: 'About'})
})

app.use('/blogs',blogRoutes)
// 404 page
app.use((req,res)=>{
    //res.status(404).sendFile('./views/404.html', {root: __dirname})
    res.status(404).render('404',{title: '404'})
})