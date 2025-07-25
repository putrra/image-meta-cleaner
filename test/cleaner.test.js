// test/cleaner.test.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { cleanImage } = require('../cleaner.js');

test('should clean metadata from a test image', async (t) => {
  const testDir = path.dirname(__filename);
  const imagePath = path.join(testDir, 'test-image.jpg');
  const cleanedImagePath = path.join(testDir, 'test-image.cleaned.jpg');

  // IMPORTANT: This test requires a real JPEG file named 'test-image.jpg'
  // to be present in the 'test' directory.
  if (!fs.existsSync(imagePath)) {
    // Skip the test if the image doesn't exist, and inform the user.
    t.skip(`Skipping test: Please add a file named 'test-image.jpg' to the 'test' directory.`);
    return;
  }

  try {
    // Run the cleaner
    await cleanImage(imagePath);

    // Assert that the cleaned file exists
    assert.ok(fs.existsSync(cleanedImagePath), 'Cleaned file should have been created');

  } catch (err) {
    assert.fail(`The cleanImage function threw an unexpected error: ${err.message}`);
  } finally {
    // Cleanup the created file
    if (fs.existsSync(cleanedImagePath)) {
      fs.unlinkSync(cleanedImagePath);
    }
  }
});
