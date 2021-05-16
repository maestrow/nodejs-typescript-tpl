import * as fs from 'fs';

const files: string[] = fs.readdirSync('.')

console.dir(files, {depth:null})