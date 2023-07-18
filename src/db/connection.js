const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://urvashiagarwalcse129:uru121@buffer.ueu2zdy.mongodb.net/Food-Factory",{
  
}).then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})


