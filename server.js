/***********************************************************************
**********
* WEB322 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic 
Policy. No part * of this assignment has been copied manually or electronically from any 
other source 
* (including 3rd party web sites) or distributed to other students.
* 
* Name: _Vaibhavkumar Patel_____________________ Student ID: ____139768204__________ Date: 
__03/06/2022______________
*
* Online (Heroku) Link: 
______ https://shrouded-springs-30267.herokuapp.com/__________________________________________________
*
************************************************************************
********/
var blogServices = require("./blog-service")
var path = require("path")
var express = require('express')
const res = require('express/lib/response')
var app = express()
var PORT = process.env.PORT || 8080

app.use(express.static('public'));
app.listen(PORT, () => {
    console.log('Express HTTP server is listening on port', PORT)
})

app.get('/', function (req, res) {
    res.redirect('/about');
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/blog", (req, res) => {
    // var data = blogServices.getPublishedPosts()
    // res.send(data)

    blogServices.getPublishedPosts()
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err));
});

app.get("/posts", (req, res) => {
    // var data = blogServices.getAllPosts()
    // res.send(data)

    blogServices.getAllPosts()
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err));

});

app.get("/categories", (req, res) => {
    // var data = blogServices.getCategories()
    // res.send(data)

    blogServices.getCategories()
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err));

});

app.get('*', function (req, res) {
    res.send('Page Not Found', 404);
});


