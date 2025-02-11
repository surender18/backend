const express=require('express');
 const app=express();

 app.set('view engine','ejs')
    // app.get('/',(req,res)=>{
    //     res.send("The home page")
    // })

    //middleware
    app.use((req,res,next)=>{
        console.log("Time:",Date.now()) ;
        const a=2
        const b=4
        console.log(a+b)
        return next()
        
    })
    app.get('/',(req,res)=>{
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