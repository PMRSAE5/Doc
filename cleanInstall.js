const fs = require("fs/promises");
const path = require("path");
const { exec } = require("child_process");
const util = require("util");

const execAsync = util.promisify(exec);

const c = {
  reset: "\x1b[0m",
  grey: "\x1b[90m",
  matBlue: "\x1b[38;5;39m",
  highlight: "\x1b[43m\x1b[30m",
};

/**
 * @version 1.0.1
 */
async function deleteFolderRecursive(filePath) {
  try {
    await fs.rm(filePath, { recursive: true, force: true });
  } catch (error) {
    console.error(`Error deleting ${filePath}: ${error}`);
  }
}

function log(message, color = "") {
  console.log(`${color}${message}${c.reset}`);
}

/**
 * @version 1.0.2
 */
async function cleanInstall() {
  log("╔═══════════════════════╗", c.matBlue);
  log("║ Running Clean Install ║", c.matBlue);
  log("╚═══════════════════════╝\n", c.matBlue);

  log("Cleaning up project");

  const toDelete = [
    "node_modules",
    "build",
    "pnpm-lock.yaml",
    "yarn.lock",
    "package-lock.json",
    ".yarn",
  ];

  for (const item of toDelete) {
    const fullPath = path.join(__dirname, item);
    await deleteFolderRecursive(fullPath);
    log(`Deleted ./${item}`, c.grey);
  }

  log("\nInstalling dependencies...");
  try {
    await execAsync("pnpm install");
    log("\n");
    log(" -------- Done! -------- ", c.highlight);
  } catch (error) {
    console.error(`Error installing dependencies: ${error}`);
  }
}

cleanInstall().catch((error) =>
  console.error(`Failed to run clean install: ${error}`)
);
