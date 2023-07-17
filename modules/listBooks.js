/* eslint-disable max-len */
class listBooks {
  static getBooks = () => {
    let books = [];
    if (localStorage.getItem('books') != null) { books = JSON.parse(localStorage.getItem('books')); }
    return books;
  }

  static addBook = (book) => {
    const books = listBooks.getBooks();
    const arr = Array.from(books);
    arr.push(book);
    localStorage.setItem('books', JSON.stringify(arr));
    this.addBookDOM(book);
  }

  static addBookDOM = (book) => {
    const newBook = document.createElement('tr');
    newBook.setAttribute('class', 'book');
    newBook.innerHTML = `<td class="title"> ${book.title} </td>
                            <td class="by">by</td>
                            <td class="author">${book.author}</td>
                            <button class="btn-remove">Remove</button>`;
    document.querySelector('#list-books').append(newBook);
  }

  static removeBook = (target) => {
    // Remove LocalStorage
    const books = listBooks.getBooks();
    const title = target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    const author = target.previousElementSibling.previousElementSibling.textContent;
    const res = books.filter((books) => books.title !== title && books.author !== author);
    localStorage.setItem('books', JSON.stringify(res));
    // Remove DOM
    target.parentElement.remove();
  }
}

export default listBooks;