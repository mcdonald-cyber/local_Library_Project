const { getTotalAccountsCount } = require("./home");



function findAuthorById(authors, id) {
  return authors.find(authors => authors.id === id);
}



function findBookById(books, id) {
  return books.find(book => book.id === id);
}




function partitionBooksByBorrowedStatus(books) {
  const booksborrowed = books.filter((book) =>
  book.borrows.map((borrow) => (!borrow.returned[0])));
  
  
  const booksreturned = books.filter((book) =>
  book.borrows.map((borrow) => (borrow.returned[0])));
  console.log([...booksborrowed, ...booksreturned]);
  return [...booksborrowed, ...booksreturned];
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
