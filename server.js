const express = require('express')
const htmlRoutes = require("././Develop/routes/htmlRoutes");
const apiRoutes = require("././Develop/routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

/* app.listen(PORT, ()=> {
    console.log(`Listening on PORT: ${PORT}`)
});
*/

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});