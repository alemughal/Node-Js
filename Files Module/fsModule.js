const fs = require('fs');


// Writing Content in file
//Sync Module

const content = "Hello World from Ali Mughal"
fs.writeFileSync("test.txt",JSON.stringify(content));

// Async Module

const value = "Welcome to node application";

fs.writeFile('test.txt',content,{flag: "a+"}, err=>{
    if(err) {
        console.log(err)
        return
    }
    console.log("Successfully Done!")
})


fs.writeFile('test.txt',content,{flag: "w+"}, err=>{
    if(err) {
        console.log(err)
        return
    }
    console.log("Successfully Done!")
})

fs.writeFile('test.txt',content,{flag: "r+"}, err=>{
    if(err) {
        console.log(err)
        return
    }
    console.log("Successfully Done!")
})


// Deleting File

fs.unlink("test.txt", (err)=>{
    if(err) throw err;
    return
},
    console.log("File Removed")
)