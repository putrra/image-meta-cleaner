// cleaner.js (Kode yang sudah diperbaiki)

const fs = require('fs');
const path = require('path');
const piexif = require('piexifjs'); // Menggunakan library piexifjs

async function cleanImage(imagePath) {
  try {
    if (!fs.existsSync(imagePath)) {
      console.error('Error: File tidak ditemukan di path:', imagePath);
      return;
    }

    console.log('Membaca file:', imagePath);
    // piexifjs bekerja dengan data string, bukan buffer murni
    const imageDataStr = fs.readFileSync(imagePath).toString('binary');
    
    // Hapus metadata EXIF dari string data gambar
    const cleanedImageDataStr = piexif.remove(imageDataStr);

    // Buat nama file baru untuk output
    const dir = path.dirname(imagePath);
    const ext = path.extname(imagePath);
    const baseName = path.basename(imagePath, ext);
    const newFileName = `${baseName}.cleaned${ext}`;
    const newPath = path.join(dir, newFileName);

    // Tulis kembali data yang sudah bersih ke file baru sebagai buffer
    fs.writeFileSync(newPath, Buffer.from(cleanedImageDataStr, 'binary'));

    console.log('✅ Sukses! Metadata telah dihapus.');
    console.log('File baru disimpan di:', newPath);

  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
  }
}

module.exports = { cleanImage };