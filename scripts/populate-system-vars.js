#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');

// Get system variables
const currentWorkingDirectory = process.cwd();
const homeDirectory = os.homedir();
const defaultShell = process.env.SHELL || '/bin/bash';

// Try to determine the OS in a user-friendly format
let operatingSystem;
try {
  if (process.platform === 'darwin') {
    // For macOS, try to get the version name
    const macOSVersion = execSync('sw_vers -productVersion').toString().trim();
    const macOSName = (() => {
      // Map macOS version to name (simplified)
      if (macOSVersion.startsWith('14.')) return 'Sequoia';
      if (macOSVersion.startsWith('13.')) return 'Ventura';
      if (macOSVersion.startsWith('12.')) return 'Monterey';
      if (macOSVersion.startsWith('11.')) return 'Big Sur';
      if (macOSVersion.startsWith('10.15.')) return 'Catalina';
      return '';
    })();
    operatingSystem = macOSName ? `macOS ${macOSName}` : 'macOS';
  } else if (process.platform === 'win32') {
    // For Windows
    const windowsVersion = execSync('ver').toString().trim();
    operatingSystem = windowsVersion;
  } else if (process.platform === 'linux') {
    // For Linux, try to get distribution name
    try {
      const osRelease = fs.readFileSync('/etc/os-release', 'utf8');
      const prettyName = osRelease.match(/PRETTY_NAME="(.+)"/);
      operatingSystem = prettyName ? prettyName[1] : 'Linux';
    } catch (e) {
      operatingSystem = 'Linux';
    }
  } else {
    operatingSystem = process.platform;
  }
} catch (error) {
  operatingSystem = process.platform;
}

// Determine the global custom modes path based on OS
let globalCustomModesPath;
if (process.platform === 'darwin') {
  // macOS
  globalCustomModesPath = path.join(
    homeDirectory,
    'Library/Application Support/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_custom_modes.json'
  );
} else if (process.platform === 'win32') {
  // Windows
  globalCustomModesPath = path.join(
    homeDirectory,
    'AppData/Roaming/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_custom_modes.json'
  );
} else {
  // Linux and others
  globalCustomModesPath = path.join(
    homeDirectory,
    '.config/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_custom_modes.json'
  );
}

// Function to update a file with system variables
function updateFileWithSystemVariables(filePath) {
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

    // Replace variables in the content
    content = content.replace(/CURRENT_WORKING_DIRECTORY = .*/, `CURRENT_WORKING_DIRECTORY = "${currentWorkingDirectory}"`);
    content = content.replace(/HOME_DIRECTORY = .*/, `HOME_DIRECTORY = "${homeDirectory}"`);
    content = content.replace(/GLOBAL_CUSTOM_MODES_PATH = .*/, `GLOBAL_CUSTOM_MODES_PATH = "${globalCustomModesPath}"`);
    content = content.replace(/OPERATING_SYSTEM = .*/, `OPERATING_SYSTEM = "${operatingSystem}"`);
    content = content.replace(/DEFAULT_SHELL = .*/, `DEFAULT_SHELL = "${defaultShell}"`);

    // Write the updated content back to the file
    fs.writeFileSync(filePath, content);
    console.log(`Updated system variables in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error updating file ${filePath}: ${error.message}`);
    return false;
  }
}

// Get all system-prompt files in the .roo directory
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

  // Update each file
  let successCount = 0;
  for (const file of systemPromptFiles) {
    const filePath = path.join(rooDir, file);
    if (updateFileWithSystemVariables(filePath)) {
      successCount++;
    }
  }

  console.log(`\nSummary: Updated ${successCount} of ${systemPromptFiles.length} system prompt files.`);
} catch (error) {
  console.error(`Error reading .roo directory: ${error.message}`);
  process.exit(1);
}