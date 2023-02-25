var exec = require('child_process').exec;
let express = require('express')
const multer = require("multer");
const fileUpload = require("express-fileupload")
var bodyParser = require('body-parser')
const fs = require("fs")
const app = express()
//app.use(fileUpload());
app.use(
    bodyParser.raw({ limit: "50mb", type: ['model/*'] })
);
//const upload = multer({ dest: "uploads/" });
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
	res.send("hello world")
})

app.post("/3d", (req, res) => {
	const type = req.get('Content-Type')
	const ext = type.split("/")[1]
console.log("ext", ext);
//	console.log(req)
	const b = req.body
	const fileName = "file_"  + new Date().toISOString() + "." +ext
fs.writeFile(fileName, b,  "binary",function(err) {
    if(err) {
        console.log(err)	
    } else {
        console.log("The file was saved!");
	exec(`./prusaslicer/prusa-slicer -g ${fileName} --output apple.gcode`, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
	setTimeout(5000, 
});
    }
});
})



app.listen(28508, ()=>{
console.log("listening on 28508")
})
///
//console.log("h")

