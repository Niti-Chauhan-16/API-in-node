const express=require('express');
const bodyParser=require('body-parser')
const routes=require('./Routes/books')

const app=express();
const port=3000;


app.use(bodyParser.json());

app.use('/books',routes)
app.get('/',(req,res)=>{
    res.send("hello,welcome to the api")

})
app.get('*',(req,res)=>{
    res.send("this route doesnot exists")
})


app.listen(port,()=>{
    console.log(`server is listening  at ${port}`)
});


