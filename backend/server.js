const http=require('http');
const PORT=process.env.PORT||5000;
const app=require('./app');

const server=http.createServer(app);
const dbConnect=require('./database/dbconnect');
dbConnect();
server.listen(PORT,console.log(`server is running at ${PORT}`));

process.on("unhandledRejection", (err) => {
    
    console.log(err.name, err.message);
    server.close(() => {
       process.exit(1);
    });
 });
 
 process.on("SIGTERM", () => {
   
    server.close(() => {
       console.log("oh shit Process terminated!");
    });
 });
