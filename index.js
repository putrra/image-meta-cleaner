#!/usr/bin/env node
// index.js
const { cleanImage } = require('./cleaner.js');
const imagePath = process.argv[2];

if (!imagePath) {
  console.log('--- Image Metadata Cleaner ---');
  console.log('A CLI tool to remove EXIF metadata from JPEG files.');
  console.log('');
  console.log('Usage:');
  console.log('  image-cleaner <path/to/your/image.jpg>');
  process.exit(1);
}

cleanImage(imagePath);