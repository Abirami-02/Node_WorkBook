//use the fileSystem module Here. 4 concepts are done 
let file=require('fs');
file.readFile('cal1.js','utf8',function(err,data)
{
    console.log(data); // if data is in the file it will read and print the data ...else it throw err as undefined 
}) // it takes 3 parameters 


// how to write the content we can create the file ,if existing we can add the content at last
file.appendFile('cal2.js','console.log("add content ")',function(err)
{
    console.log("Data added SuccessFully");
});

file.writeFile('cal1.js','let a=10;\n let b=10;\n console.log(a+b);\n ',function(err)
{
    console.log("new File was Created ...");
})

// how to delete the file?

file.unlink('cal2.js',function(err)
{
    console.log("The File was Deleted  Successfully");
})