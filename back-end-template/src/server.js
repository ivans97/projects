import express from 'express';
import bodyparser from 'body-parser';
import {routes} from "./routes";

const app = express();

app.use(bodyparser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});


app.get('/hello', (req, res) => {
    res.send("Hellos");
})

app.listen(8080, ()=> {
    console.log("server is listening on port 8080");
});