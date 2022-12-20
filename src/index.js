import express from "express";
import env from "dotenv";
import upload_route from "./routes/upload_routes.js"
env.config();

// membuat variabel app
const app = express();

// memanggil objek PORT 
const { PORT } = process.env;

// memanggil app untuk digunakan dalam bentuk static
app.use(express.static("../public"));

// memanggil app untuk digunakan dan diubah dalam bentuk json
app.use(express.json());

// memanggil app serta upload_route untuk digunakan
app.use(upload_route);

app.listen(PORT, () => {
    console.info("Server Sedang Berjalan");
});