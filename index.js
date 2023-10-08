import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.post("/submit", (req, res) => {
    var inputName = req.body[ 'headingOfTask' ];

    res.render("index.ejs", {
        name: inputName
        });
});
app.patch('/Enter', (req, res) => {
    var inputTask = req.body[ 'nameOfTask' ];
    res.render("index.ejs", {
        // name: inputName,
        task: inputTask
    });
} );
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
