const express=require('express')
let {connection,query}=require('../database/database')

var books=[];

const getBooks=async (req,res)=>{
    console.log(`user in the book database ${books}` )

    try {
        
        const results = await query('SELECT * FROM book');
        res.send(results)
    } catch (error) {
        console.error('Error executing query:', error);
    } 
    
    
    
    
}

const addBook=async (req,res)=>{
    const obj=req.body;
    
    
    

    try {
        const book_name=obj.bookname
        const Author=obj.Author
        const id=parseInt(obj.id)


        const result = connection.query('INSERT INTO book (id,Author_Name,book_Name) VALUES (?, ?,?)', [id,Author,book_name]);

        
        res.send("sucessfully added in the database ")
      } catch (error) {
        console.error('Error updating data:', error);
      }
   
}


const deleteBook=(req,res)=>{
    const id=req.params.id;
    
    try {
        const result =  connection.query('DELETE FROM book WHERE id = ?', [id]);
        res.send('Deleted data successfully');

      } catch (error) {
        console.error('Error deleting data:', error);
      }
    

}


const updateBook=(req,res)=>{

    const obj=req.body;
    const newName=obj.book_name;

    try {
        const result = connection.query('UPDATE book SET Book_name = ? WHERE id = ?', [newName, id]);
        console.log('Updated data:', result);
      } catch (error) {
        console.error('Error updating data:', error);
      }
}

module.exports={getBooks,addBook,deleteBook,updateBook};
