import multer from "multer";
import path from "path";

// membuat variabel storage yang menampung destination dan filename
const storage = multer.diskStorage(
    {
        // menentukan lokasi penyimpanan file upload 
        destination: (request, file, cb) => {
            console.info(file);
            cb(null, path.join(__dirname, '../../public/uploads'))
        },
        // memberikan nama file upload serta tipe upload file
        filename: (request, file, cb) => {
            // menyesuaikan nama file gambar
            cb(null, file.originalname)
        }
    }
);

// membuat variabel upload untuk memanggil objek storage
const upload_middleware = multer(
    {
        storage: storage,
    }
);

// untuk bisa digunakan di semua file
export default upload_middleware;