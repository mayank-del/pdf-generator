const pdf= require('pdf').pdf;
const fs=require('fs');

var doc=new pdf()

doc.text(20,20,'This is the first page');// adding some text

doc.text(20,40,'This is the first page');// adding more text to first page itself

doc.addPage()

doc.text(20,20,"This is second page of doc.")

doc.setProperties({
    title:'Pdf in java',
    subject:'Constructor',
    creator:'Mayank',
    Keywords:'new,this'
})
doc.setFontSize(22)

let filename="java-concepts-in-javascript.pdf";

fs.writeFile(filename,doc.output(),function(err,date){
    console.log("pdf-created");
})