const express =require('express');
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.post('/',(req,res)=>{
    const data = req.body;
    res.json({message:'Data received',data});
    console.log(req.body);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}); 