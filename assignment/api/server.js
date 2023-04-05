const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.json())

const userRouter = require('./routes/users')
const loginRouter = require('./routes/login')

app.use("/user", userRouter)
app.use("/login", loginRouter)

mongoose
  .connect(
    "mongodb+srv://lawalek:kaustubh123@cluster0.x4xtc67.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  });
  app.listen(8002, () => {
    console.log("Server started on port 8002");
  });



