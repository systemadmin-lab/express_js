const express =require('express');

const app = express();
const admin = express.Router();
admin.get('/dashboard',(req,res)=>{
    console.log(req.baseUrl);
    res.send('We are in Admin Dashboard');
});

app.use('/admin',admin);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
  
}); 