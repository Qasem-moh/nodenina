const express=require("express")
const app=express()

//register view engin
app.set('view engin','ejs')

//root api
app.get("/",(req,res)=>{
    res.sendFile('./views/home.html',{root:__dirname})
})

//about endpoint
app.get('/about',(req,res)=>{
    // res.sendFile("./views/about.html",{root:__dirname})
    res.render('index')
})

//redirect endpoint to about
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

//use  404 page
app.use((req,res)=>{
    res.status(401).sendFile('./views/404.html',{root:__dirname})
})

//listening server
app.listen(2545,()=>console.log("sever is running")
)