const  express=require("express");
const cors=require("cors")
const app=express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
//data ------------
const users=[
    {id:1, name:"sabana", email:"sabana@gmail.com"},
    {id:2, name:"sabila", email:"sabila@gmail.com"},
    {id:3, name:"sabnur", email:"sabnur@gmail.com"}
]

app.get("/",(req,res)=>{
    res.send("Hello World")
});

app.get("/users",(req,res)=>{
    res.send(users);
})
app.post("/users",(req,res)=>{
    console.log('post request hitting');
    console.log(req.body);
    const newUser=req.body;
    newUser.id=users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port,()=>{
    console.log(`Website running on PORT: ${port}`);
})