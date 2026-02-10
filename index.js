const express =require('express');
const handle = require('./handle');
const app = express();
const admin = express()
app.locals.title = 'My Express App';
admin.get('/dashboard',(req,res)=>{
    req.send('admin dashboard');
})
app.get('/',handle);
app.use('/admin',admin);    


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
  
}); 