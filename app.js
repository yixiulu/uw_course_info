var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uwaterlooApi = require("uwaterloo-api");
var uwclient = new uwaterlooApi({
  API_KEY : '7fcf8cedea2c104b3fdfc36dc5eac066'
});

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("welcome");
});

app.get("/courseSearch", function(req, res){
    res.render("courseSearch");
});

app.get("/mySchedule", function(req, res) {
    res.send("Coming soon");
}
); 

app.post("/courseInfo", function(req, res) {
    var csubject = req.body.courseSubject;
    var cnumber = req.body.courseNumber;
    var url = "/courses/" + csubject + "/" + cnumber + "/schedule";
   uwclient.get(url, {}, function(err, uwres){
       res.render("courseInfo", {courseInfo: uwres, courseSubject: csubject, courseNumber: cnumber});
    });
});


app.get("/getApi", function(req, res){

uwclient.get('/courses/CS/251/schedule', {}, function(err, uwres){
   res.send(uwres["data"]);
});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!");
});