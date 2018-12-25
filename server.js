const express = require('express')
const fs = require('fs')
const hbs = require('hbs')
const app = express()

app.set('view engine','hbs')

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () => {
return new Date().getFullYear()
})

app.use((req,res,next)=>{

    log = `Time : ${new Date().getFullYear()} -URL :${req.url} and ${req.method}`
console.log(log);
fs.appendFile('server.log',log + '\n', (err)=>{
    if(err){
console.log('Unable to write log')

    }
});
    next()

})
// app.use((req,res,next)=>{
    
// res.render('maintenance.hbs')

// })

app.use(express.static(__dirname + '/public'))

app.get('/',(req, res)=>{
res.render('home.hbs',{
    pageTitle:'Home Page',
    
})
})

app.get('/about',(req, res)=>{
    res.render('aboutus.hbs',{
        pageTitle : 'About Us',
        
    })
    })
    app.get('/contactus',(req, res)=>{
        res.render('contactus.hbs',{
            pageTitle : 'Contact Us',
            
        })
        })
app.listen(8080)