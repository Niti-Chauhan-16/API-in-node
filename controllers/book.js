const express=require('express')

var books=[];

const getBooks=(req,res)=>{
    console.log(`user in the book database ${books}` )
    res.send(books);
}

const addBook=(req,res)=>{
    const book=req.body;
    
    books.push(book);
    res.send("sucessfully added in the database ")
   
}


const deleteBook=(req,res)=>{
    const id=req.params.id;

    books=books.filter((book)=>book.id!=id)
    console.log("sucessfully removed from the database")

}


const updateBook=(req,res)=>{
    const book=books.find((book)=>book.id=req.params.id)

    book.Author=req.body.Author;
    console.log("sucessfully updated");
}

module.exports={getBooks,addBook,deleteBook,updateBook};
