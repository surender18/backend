const express=require('express');
const morgan = require('morgan')

 const app=express();
app.use(morgan('dev'))
 app.set('view engine','ejs')
    // app.get('/',(req,res)=>{
    //     res.send("The home page")
    // })

    //middleware
    app.use((req,res,next)=>{
        console.log("server is running") ;
        return next()
        
    })
    // app.get('/',(req,res)=>{
    //     res.render('index')
    // })
    app.get('/',(req,res,next)=>{
        const a=5;
        const b=24;
        console.log(a+b);
        next()
        
    },
    (req,res)=>{
        res.render('index')
    })
    app.get('/about',(req,res)=>{
        res.send("The about page")
    })  
    app.get('/profile',(req,res)=>{
        res.send("The profile page")
    })  

 app.listen(3000)

 
//  41