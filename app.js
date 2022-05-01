var express = require("express");
var app = express();
app.get("/films", (req, res, next) => {
    res.json(["Dune","Interstellar","Gladiator","The Shawshank Redemption"]);
   });
app.listen(3000, () => {
 console.log("Server running on port 3000");
});