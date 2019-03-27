// const express = require('express');
// const request = require('request');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();

// //Body parser
// app.use(bodyParser.urlencoded({extended: true}));


// //Static folder 
// app.use(express.static(path.join(__dirname,'public')))


// //SignUp route
// app.post('/signup',(req,res) =>{
//   const { firstName, LastName, email } = req.body;

// //Validation for fields
//   if(!firstName || !LastName || !email){
//       res.redirect('/fail.html')
//   }

//   //Construct req data
// const data ={
//     members:[
//         {
//             emai_address:email,
//             status: 'subscribed',
//             merge_fields:{
//                 FNAME: firstName,
//                 LNAME: LastName
//             }
//         }
//     ]
// }

// const postData = JSON.stringify(data);

// const options = {
//     url:'https://us20.api.mailchimp.com/3.0/lists/8bb0fe172e',
//     method: 'POST',
//     headers:{
//         Authorization: 'auth 227a7a3ca8b0742dce691001c6a2e934-us20'
//     },
//     body: postData

// }
//   request(options ,(err,response,body) =>{
//      if(err){
//          res.redirect('/fail.html');
//     }else{
//         if(response.statusCode === 200){
//             res.redirect('/success.html');

//         }else{
//             redirect('/fail.html')
//         }
//     }
//   });
  
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log(`Server is running perfectly on ${PORT}`));