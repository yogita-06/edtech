require("dotenv").config();
const express = require('express')
const cors = require("cors");
const app = express()
const port = 3000
// const authRouter = require('./router/auth-router')
// const adminRouter = require("./router/admin-router")
const connectDb= require('./utils/db')



var corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credential: true,
  }

app.use(cors(corsOptions))
app.use(express.json())

// app.use("/api/auth", authRouter)
// app.use("/api/admin", adminRouter)


connectDb().then(() => { 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})})

