const express=require("express")
const app=express()

//register view engin
app.set('view engine','ejs')

//root api
app.get("/",(req,res)=>{
    // res.sendFile('./views/home.html',{root:__dirname})
    const blogs=[
        {title: 'Qasem',snippet:'lorem ipsum dolor sit amet consectetur'},
        {title: 'Ahmad',snippet:'lorem ipsum dolor sit amet consectetur'},
        {title: 'Mohammad',snippet:'lorem ipsum dolor sit amet consectetur'},
    ]
    res.render('index',{blogs})
})

//about endpoint
app.get('/about',(req,res)=>{
    // res.sendFile("./views/about.html",{root:__dirname})
    res.render('about')
})

app.get('/blogs/create',(req,res)=>{
    res.render('newBlog')
})

//redirect endpoint to about
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about')
// })

//use  404 page
app.use((req,res)=>{
    // res.status(401).sendFile('./views/404.html',{root:__dirname})
    res.status(404).render('404')
})

//listening server
app.listen(2545,()=>console.log("sever is running")
)