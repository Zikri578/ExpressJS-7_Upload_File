import { request, response } from "express";

// membuat variabel create upload
const upload_create = async (req = request, res = response) => {
    try {
        // membuat variabel data untuk melakukan request body
        const data = await req.body;

        console.info(data);

        // mengembalikan permintaan status kedalam bentuk json
        return res.status(200).json(
            {
                // menampilkan pesan bahwa data berhasil dibuat
                success: true,
                message: "Data Berhasil Dibuat",
            }
        )
    } catch (error) {
        // mengembalikan respons kedalam bentuk json
        return res.status(500).json(
            {
                // menampilkan pesan bahwa data tidak berhasil dibuat
                success: false,
                message: error.message,
            }
        )
    }
}

// untuk bisa digunakan di semua file
export default upload_create;