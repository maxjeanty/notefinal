const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public/assets/'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var PORT = process.env.PORT || 5500;

app.listen(PORT, function(){
    console.log("Server is running on port " + PORT)
});