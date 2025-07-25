# Image Meta Cleaner

A simple, fast, and privacy-focused CLI tool to remove EXIF metadata from your images.

## Why?

Digital images often contain hidden metadata (EXIF) that can reveal sensitive information like the location where the photo was taken, the device used, and the date. This tool helps you protect your privacy by easily stripping this data away before you share your images.

## Features

- Removes EXIF metadata from JPEG files.
- Creates a new, clean file without modifying the original.
- Simple command-line interface.
- Lightweight and fast.

## Installation

To install the tool globally on your system, run the following command:

```bash
npm install -g @hyperlabsx/image-meta-cleaner
```

## Usage

Using the tool is straightforward. Just point it to the image you want to clean.

```bash
image-cleaner <path/to/your/image.jpg>
```

### Example

```bash
$ image-cleaner my-vacation-photo.jpg

Reading file: my-vacation-photo.jpg
✅ Success! Metadata has been removed.
New file saved at: my-vacation-photo.cleaned.jpg
```

A new file named `my-vacation-photo.cleaned.jpg` will be created in the same directory, with all metadata removed.

## License

This project is licensed under the MIT License.
