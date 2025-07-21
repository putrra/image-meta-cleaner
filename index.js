#!/usr/bin/env node
// index.js
const { cleanImage } = require('./cleaner.js');
const imagePath = process.argv[2];

if (!imagePath) {
  console.log('--- Image Metadata Cleaner ---');
  console.log('Alat CLI untuk menghapus metadata EXIF dari file JPEG.');
  console.log('');
  console.log('Cara Penggunaan:');
  console.log('  image-cleaner <path/ke/gambar.jpg>');
  process.exit(1);
}

cleanImage(imagePath);