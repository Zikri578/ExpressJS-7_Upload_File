import express from "express";
import upload_create from "../controllers/upload_controllers.js";
import upload_middleware from "../middleware/upload_middleware";

// membuat variabel upload_route
const upload_route = express.Router();

// membuat route create upload menggunakan method post
upload_route.post("/api/upload/create", upload_middleware.single('file'), upload_create);

// untuk bisa digunakan disemua file
export default upload_route;