#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to wipe system variables from a file
function wipeSystemVariablesFromFile(filePath) {
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if the file contains system variables section
    if (!content.includes('# SYSTEM VARIABLES') && !content.includes('CURRENT_WORKING_DIRECTORY =')) {
      console.log(`File does not contain system variables section: ${filePath}`);
      return false;
    }

    // Replace variables in the content with empty values
    content = content.replace(/CURRENT_WORKING_DIRECTORY = .*/, 'CURRENT_WORKING_DIRECTORY = ');
    content = content.replace(/HOME_DIRECTORY = .*/, 'HOME_DIRECTORY = ');
    content = content.replace(/GLOBAL_CUSTOM_MODES_PATH = .*/, 'GLOBAL_CUSTOM_MODES_PATH = ');
    content = content.replace(/OPERATING_SYSTEM = .*/, 'OPERATING_SYSTEM = ');
    content = content.replace(/DEFAULT_SHELL = .*/, 'DEFAULT_SHELL = ');

    // Write the updated content back to the file
    fs.writeFileSync(filePath, content);
    console.log(`Wiped system variables in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error wiping file ${filePath}: ${error.message}`);
    return false;
  }
}

// Get all system-prompt files in the .roo directory
const currentWorkingDirectory = process.cwd();
const rooDir = path.join(currentWorkingDirectory, '.roo');

try {
  const files = fs.readdirSync(rooDir);
  
  // Filter for system-prompt files and example-system-prompt
  const systemPromptFiles = files.filter(file => 
    file === 'example-system-prompt' || file.startsWith('system-prompt-')
  );
  
  if (systemPromptFiles.length === 0) {
    console.log('No system prompt files found in .roo directory.');
    process.exit(1);
  }

  // Wipe system variables from each file
  let successCount = 0;
  for (const file of systemPromptFiles) {
    const filePath = path.join(rooDir, file);
    if (wipeSystemVariablesFromFile(filePath)) {
      successCount++;
    }
  }

  console.log(`\nSummary: Wiped system variables from ${successCount} of ${systemPromptFiles.length} system prompt files.`);
} catch (error) {
  console.error(`Error reading .roo directory: ${error.message}`);
  process.exit(1);
}