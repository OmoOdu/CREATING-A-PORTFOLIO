 const http = require('http');

const server = http.createServer(function(req, res) {

res.writeHead(200, { 'content-Type' : 'text/html' });

//res.end("Creating My First Server On Zuri Training!");


res.end(`
 <html>
    <body>
     <h1> MY HOME PAGE</h1>
     <p> MY NAME IS ODUMUYIWA ADEYEMI A STUDENT OF ZURI TRAINING. </p>
     <p> STUDENT ID : 14GOO3311NOQ </p>
    <body>
 </html>
   
   <div class = "about - section">
   <h1> About Us Page </h1>
   <p> I AM ABLE TO HANDLE TO HANDLE MULTIPLE TASKS ON A DAILY BASIS. </p>
   <p> ALWAYS ENERGETIC AND EAGER TO LEARN NEW SKILLS </p>
   </div> 

   <html>
   <head>
   <title> CONTACT LINKS </title> 
   </head>
   <body>
   <h1> Reach Us Here </h1> 
   <a href = "https://twitter.com/Cee_OmoOdu">contact </a> 
   </body> 
   </html> 

`)
}); 

server.listen(4000, '127.0.0.1'); 

console.log("Yes, you have created a server!");