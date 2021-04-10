const express = require("express")
const app = express();
const hbs = require("hbs");
const path = require("path")
const temp = path.join(__dirname, "./templates/views")
const headers = path.join(__dirname, "./templates/partials")
const port = process.env.PORT || 3300;

// console.log(temp)
app.set('views', temp)
app.set('view engine', "hbs")
hbs.registerPartials(headers)
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use("/css", express.static(path.join(__dirname, "../public/css")))
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use("/js", express.static(path.join(__dirname, "../public/js")))
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")))
app.use("/css", express.static(path.join(__dirname, "../node_modules/owlcarousel-pre/owl-carousel")))
app.use("/js", express.static(path.join(__dirname, "../node_modules/owlcarousel-pre/owl-carousel")))
app.use("/css", express.static(path.join(__dirname, "../node_modules/font-awesome/css")))


app.use("/img", express.static(path.join(__dirname, "../public/img")))



app.get("/", (req, res) => {
    res.render("index")

})
app.get("/about", (req, res) => {
    res.render("about")
})

app.get('/wheater', (req, res) => {
    res.render("wheater")
})
app.get("*", (req, res) => [
    res.render("404")
])
app.listen(port, () => {
    console.log(`port working ${port}`)
})