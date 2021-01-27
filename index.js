const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.set("view engine", "pug");

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: false }));
/*app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(cookieParser);*/

app.get("/", (req, res) => {
    res.render("main");
});

app.get("/menu", (req, res) => {
    res.render("menu");
});

app.get("/videos", (req, res) => {
    res.render("videos");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/404", (req, res) => {
    res.render("not-found");
});

app.get("/error", (req, res) => {
    res.render("error");
});

app.use((req, res, next) => {
    console.log("404 error handler called");
    res.status(404).render("not-found");
});


//
app.use((req, res, next) => {
    console.log("500 error handler called");
    res.status(500).render("error");
});

app.use((err, req, res, next) => {
    if (err) {
        console.log("Global error handler called", err);
        if (err.status === 404) {
            res.status(404).render("not-found", { err });
        } else {
            err.message = "You got a 500 error";
            res.status(500).render("error", { err });
        }
    }
});

//
app.listen(3000, () => {});

/*
app.use((req, res, next) => {
    console.log('404 error handler called');
    res.status(404).render("not-found"); ;
});

app.use((req, res, next) => {
    console.log('500 error handler called');
    res.status(500).render("error");
});

app.use((err, req, res, next) => {
  if (err) {
    console.log('Global error handler called', err);
    if (err.status === 404) {
        res.status(404).render("not-found", {err});
    } else {
        err.message = "You got a 500 problem";
        res.status(500).render("error", {err});
    }
    }
});
*/
