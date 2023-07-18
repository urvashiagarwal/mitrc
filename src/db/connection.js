const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://inventedufounder:shivam008@cluster0.yfki7tk.mongodb.net/food-factory",{
  
}).then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})


