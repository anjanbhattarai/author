const mongoose= require("mongoose");
const authorDB="authorDB";

mongoose.connect(`mongodb://localhost/${authorDB}`,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Connected to MongoDB ${authorDB}`)
}).catch((err)=>{
    console.log("DB CONNECTION ERROR", err);
})