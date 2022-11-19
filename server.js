const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => console.log("Now listening"));


app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/about.html'));
})
app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/work.html'));
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/contact.html'));
})
app.get('/Mickey-N-Friends-Finder', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/portfolio/project-one.html'))
})
app.get('/Wish-List', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/portfolio/project-two.html'))
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});