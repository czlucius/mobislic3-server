var exec = require('child_process').exec;
let express = require('express')


const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
	res.send("hello world")
})

app.post("/3d", (req, res) => {


})
app.listen(28508, ()=>{
console.log("listening on 28508")
})
///
//console.log("h")

