// Launcher for Duly's MCP connector. All the work, and the Calendar permission, live in the Duly app;
// this file only starts the connector that ships inside it and passes stdin and stdout through.
const { spawn } = require('child_process');
const fs = require('fs');

const BRIDGE = '/Applications/Duly.app/Contents/MacOS/duly-mcp';

if (process.platform !== 'darwin' || !fs.existsSync(BRIDGE)) {
  process.stderr.write('Duly is not installed. This server needs the Duly app for Mac (macOS 14 or later): ' +
    'https://starck.studio/apps/duly. Install it, open it from the menu bar, and allow Calendar.\n');
  process.exit(1);
}

const child = spawn(BRIDGE, [], { stdio: 'inherit' });
child.on('exit', (code, signal) => process.exit(code ?? (signal ? 1 : 0)));
child.on('error', (e) => { process.stderr.write(`Could not start Duly's connector: ${e.message}\n`); process.exit(1); });
