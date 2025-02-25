// import express from "express"
const express = require("express")
const cors = require("cors")
const app = express()
const routes = require("./src/routes/index")
const port = process.env.PORT | 3000

app.use(cors())
app.use(express.json())
app.use("/api",routes())

app.listen(port, ()=> console.log(`Ejecutandome en el puerto ${port}`))