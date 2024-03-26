const mongoose = require("mongoose");

const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`Connected to DB : ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    })
}


module.exports = connectToDb;


// const connectToDb = async() => {
//     try{
//         // db connection
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("DB connected successfully !!");

//         app.on("error",(err) => {
//             console.log("Error : ", err);
//             throw err;
//         })

//         app.listen(port, () => { 
//             console.log(`Listening on port ${port}`);
//         })
//     }
//     catch(error){
//         console.error("Error : ", error);
//         throw error;
//     }
// }