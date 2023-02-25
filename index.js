var exec = require('child_process').exec;
let express = require('express')
const multer = require("multer");

const app = express()
const upload = multer({ dest: "uploads/" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
	res.send("hello world")
})

app.post("/3d", upload.single(`file_${new Date().toUTCString()}`),(req, res) => {
	const file = req.files
	console.log(file)
})



app.listen(28508, ()=>{
console.log("listening on 28508")
})
///
//console.log("h")

