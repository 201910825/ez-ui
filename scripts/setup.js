const fs = require('fs');
const path = require('path');

// Create 'lib' directory if it doesn't exist
const libDir = path.join(__dirname, '../lib');
if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir);
}

// Create 'utils.ts' file with initial content if it doesn't exist
const utilsFile = path.join(libDir, 'utils.ts');
if (!fs.existsSync(utilsFile)) {
  const initialContent = 
  `import * as React from "react"
    import { clsx, type ClassValue } from "clsx"
    import { twMerge } from "tailwind-merge"

    export function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs))
    }
    `;
  fs.writeFileSync(utilsFile, initialContent);
}