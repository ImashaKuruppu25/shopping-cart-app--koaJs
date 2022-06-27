const Koa = require("koa");
const mongoose = require("mongoose");
const json = require("koa-json");
const cors = require("koa-cors");
const bodyparser = require("koa-bodyparser");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = new Koa();

app.use(json());
app.use(cors());
app.use(bodyparser());

//routes


const db = mongoose.connection;

const dbUpdate = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useFindAndModify: false,
  //   useCreateIndex: true,
};

//establised database connection
mongoose.connect(process.env.MONGO_URL, dbUpdate);

//check db status
db.on("error", (err) => console.log("db not connected " + err));

db.on("connected", () => {
  console.log("db connected!");
});

db.on("open", () => {
  console.log("connection mode");
});

db.on("disconnected", () => {
  console.log("db disconnected!");
});

//run server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});