const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080

let count = 0;
app.get("/", (req, res)=>{
    count++;
    res.json({count});
})

app.listen(PORT, ()=>{
    console.log(`Serer is running. ${PORT}`);
})