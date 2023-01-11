# ExpressJS-7_Upload_File

Upload file dalam Express.js adalah proses mengirim atau mengunggah file dari client (browser) ke server. Express.js menyediakan beberapa modul yang dapat digunakan untuk melakukan upload file, seperti multer dan busboy. Multer digunakan untuk menangani upload file dalam format multipart/form-data, yang biasa digunakan saat mengirim file dari form HTML. Sedangkan busboy digunakan untuk menangani upload file dalam format application/octet-stream, yang biasa digunakan saat mengirim file melalui API.

Untuk menggunakan modul Multer, Anda harus memasang modul tersebut terlebih dahulu dengan menjalankan perintah "npm install multer" dalam command line. Kemudian, Anda dapat menggunakan middleware multer dalam routing Express.js Anda untuk menangani request upload file. Middleware ini akan mem-parsing file yang diunggah dan menyimpan file tersebut di direktori yang ditentukan.

Setelah file diunggah, Anda dapat mengakses informasi file, seperti nama, ukuran, dan tipe file, melalui objek request. Anda juga dapat mengakses file itu sendiri melalui objek request dan menyimpannya di direktori yang diinginkan.

Beberapa config yang bisa di set dalam multer seperti
* storage : untuk menentukan lokasi penyimpanan file
* fileFilter : untuk filter jenis file yang diupload
* limits : untuk batas ukuran file yang diupload

Dalam express js, dapat dikombinasikan dengan express router, anda dapat membuat route khusus untuk upload file. Sebagai contoh :
    var express = require('express');
    var router = express.Router();
    var multer  = require('multer');
    var upload = multer({ dest: 'uploads/' });

    router.post('/upload', upload.single('file'), function(req, res, next){
      // do something
    });

