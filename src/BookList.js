import React from 'react';

function BookList() {
  // Array of books
  const books = ['Java', 'Web Technologies', 'Data Structures', 'Calculus'];

  return (
    <div>
      <h2>Book List</h2>
      <ol>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ol>
    </div>
  );
}

export default BookList;
