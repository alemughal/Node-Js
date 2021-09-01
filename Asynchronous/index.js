// Asynchronous Modules

// File System Module

const fs = require("fs");

// Reading File

fs.readFile("Newfile.txt", "utf-8", (data,err) => {
    console.log(data,err)
});

console.log("The message is");

// Replacing Content

let text = fs.readFileSync("Newfile.txt", "utf-8");
text = text.replace("Muhammad Ali", "Ali");

fs.writeFile("Newfile1.txt", text, ()=> {
    console.log("Content is replaced")
});

// Append Content

fs.appendFile("Newfile1.txt", "something added", "utf-8", (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

// Deleting a file

fs.unlink("Newfile1.txt", (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
  });

// Rename a file

fs.rename("Newfile.txt", "Data.txt", (err) =>{
    if (err) throw err;
    console.log("The file was renamed");
});



