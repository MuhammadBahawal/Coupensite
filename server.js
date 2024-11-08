// const index = require("uuid-random");
const app = require("./index");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

require("dotenv").config();

mongoose.connect(process.env.ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log(process.env.ATLAS);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database Connected");
});

app.get("/" , (req,res)=>{
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build" , "index.html"));
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(3000, (req, res) => {
  console.log("Listening to the server");
});
