// Modules 

// File System Module 

const fs = require("fs");

// Reading File

let text = fs.readFileSync("some.txt", "utf-8");

console.log(text);

// Replacing Content 

text = text.replace("Ali Mughal", "Muhammad Ali");

fs.writeFileSync("Newfile.txt", text);

// Append Content

fs.appendFileSync("Newfile.txt", "data to append", "utf-8");

// Deleting a file

fs.unlinkSync("element.js");
console.log("The file was deleted");

// Rename a file

fs.renameSync("some.txt", "First.txt");
console.log("The file was renamed");


// Path Module 

const path = require('path');

// dirname 

let dirname = path.dirname('/Users/alimu/some.txt');
console.log(dirname);

// basname 

let basename = path.basename('/Users/alimu/some.txt');
console.log(basename);

// delimiter

console.log(path.delimiter);

// extname 

let extname = path.extname('/Users/alimu/some.txt');
console.log(extname);

// format 

let obj = {dir: 'C:\\Users\\alimu', base : 'some.txt'};
let format = path.format(obj);

console.log(format);

// isAbsolute 

let isPath = '/Users/alimu/some.txt';

console.log(path.isAbsolute(isPath));

// join

let x = path.join('Users', 'alimu', 'some.txt');
console.log(x);

let normalize = path.normalize('Users/Refsnes/../alimu');
console.log(normalize);
