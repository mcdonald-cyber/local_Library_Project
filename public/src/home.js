function helperfunction(arr) {
return arrs.reduce((counter, index) => counter +=1 ,0); 
}



function getTotalBooksCount(books) {
  return helperfunction(books); 
}




function getTotalAccountsCount(accounts) {
  return accounts.length;
}



function getBooksBorrowedCount(books) {
  let booksBorrowed = books.filter((book) =>
  book.borrows.find((borrow) => borrow.returned===false));
  return booksBorrowed.length;
}


 

                            
function getMostCommonGenres(books) 
  {
  
  const mostCommonGenres = books.reduce((acc, book) => 
    {
    const genre = book.genre;
    if (acc[genre]) 
    {
      acc[genre]++;
    } else 
    {
      acc[genre] = 1;
    }
    return acc;
  },{});
  
    //Need to sort by count of genre, and add name:genre, count:num 
 let arr = []
  for (let category in mostCommonGenres) {
    let count =mostCommonGenres[category]
    arr.push({name: category, count} )
  }
  let sorted = arr.sort((genreA, genreB) => genreB.count - genreA.count)
 
  console.log(sorted)
  return sorted.slice(0,5)
}



function getMostPopularBooks(books) {
return books.sort((a,b) =>{
  if(a.borrows.length > b.borrows.length) {
    return -1;
  } else{
    return 1;
  }
  
}).slice(0,5).map((book) => {return {name: book.title, count: book.borrows.length}})

}




function getMostPopularAuthors(books, authors) {
  let obj = books.reduce((acc, book) => {
    const author = authors.find(author => author.id === book.authorId)
    const authorName = `${author.name.first} ${author.name.last}`
    if(acc[authorName]){
      acc[authorName].count += book.borrows.length;
    } else {
      acc[authorName] =  {name: authorName, count: book.borrows.length};
    }
    return acc;
  } , {});
  let sortedAuthors = Object.values(obj).sort((a,b) => b.count - a.count).slice(0,5)
  return sortedAuthors
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
