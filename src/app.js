const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecaste=require('./utils/forecast')
console.log(__dirname)
console.log(__filename)
const app=express()

//Define paths for Express Config
const productFileName=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

//Setups handlebar engine and views location
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)

//Setup static directory to serve
app.use(express.static(productFileName))
// app.get('',(req,res)=>{
//   res.send('Hello Express!')
// })


app.get('',(req,res)=>{
  res.render('index',{
    title:'Weather App',
    name:'Wall-E'
  })})
  

  app.get('/about',(req,res)=>{
      res.render('about',{
        title:'About',
        name:'Wall-E'
      })
  })
  app.get('/help',(req,res)=>{
    res.render('help',{
      title:'Need Help?',
      content:`<p>If you're having trouble, we're here to help!</p>
      <p>Check out our Help Center for step-by-step guides</p>
      <p>Contact support via Live Chat or Email</p>
       <p>Still stuck? Tap the question mark icon at the top right for more tips!</p>
        `,
         name:'Wall-E'
    })
  })

  app.get('/weather',(req,res)=>{
  console.log(req.query)
  if(!req.query.search){
    return res.send('You have to give a location name')
  }

  res.send({
    weather:'Humid',
      location:'Cannanore',
  place:`Place given by you: ${req.query.search}`
})
})


 app.get('/help/*',(req,res)=>{
    res.render('404',{
      title:'404',
      name:'Wall-E',
      errorMessage:'Help article not found'

    })
  })
   app.get('*',(req,res)=>{
    res.render('404',{
      title:'404',
      name:'Wall-E',
      errorMessage:'Page not found'

    })
  })


// app.get('/help',(req,res)=>{
//   res.send('Help page')
// })

// app.get('/about',(req ,res)=>{
//   res.send('<h1>ABOUT</h1>') 
// })

app.listen(3000,()=>{
  console.log("Server is up on port 3000.")
})