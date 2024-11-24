import express from "express";
import postsRoutes from "./Routes/postsRoutes.js"

const app = express()

app.use(express.json())

app.use('/posts', postsRoutes)


const PORT = process.env.BACK_PORT


app.listen(PORT, () => {
    console.log(`Servidor rodando perfeitamente no caminho: http://localhost:${PORT}`)
});





