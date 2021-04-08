const { getTotalAccountsCount } = require("./home");



function findAuthorById(authors, id) {
  return authors.find(authors => authors.id === id);
}



function findBookById(books, id) {
  return books.find(book => book.id === id);
}




function partitionBooksByBorrowedStatus(books) {
  const result =[];
  const booksborrowed = books.filter((book) => (!book.borrows[0].returned));
  
  
  const booksReturned = books.filter((book) =>  (book.borrows[0].returned));
  
  result.push(booksborrowed,booksReturned);
  return result
}



function getBorrowersForBook(book, accounts) {
   
  const bookBorrow = book.borrows
  const bookborrowersForBooks = bookBorrow.map(borrow => {
    const found = accounts.find(account => account.id === borrow.id) 
    return {...found, ...borrow}
    
  })
  
  return bookborrowersForBooks.slice(0,10);
}  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
