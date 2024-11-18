const fs = require('fs');
const path = require('path');

// Path to your Angular app's models folder
const modelsPath = path.join(__dirname, '../src/app/models');

// Check if the folder exists
if (!fs.existsSync(modelsPath)) {
    console.error('Models folder not found:', modelsPath);
    process.exit(1);
}

// Rename all files to have an uppercase first letter
fs.readdirSync(modelsPath).forEach((file) => {
    const oldFilePath = path.join(modelsPath, file);

    // Ignore non-TS files or already properly named files
    if (!file.endsWith('.ts') || /^[A-Z]/.test(file)) {
        return;
    }

    const newFilePath = path.join(modelsPath, file.charAt(0).toUpperCase() + file.slice(1));
    fs.renameSync(oldFilePath, newFilePath);
    console.log(`Renamed: ${file} -> ${path.basename(newFilePath)}`);
});

console.log('Renaming completed!');
