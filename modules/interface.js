import Book from './book.js';
import listBooks from './listBooks.js';
import displayDateTime from './dateTime.js';

class Interface {
  constructor() {
    this.loadInterface = () => {
    };
  }
}

export default Interface;

// Add New Book
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const newTitle = document.querySelector('#title').value;
  const newAuthor = document.querySelector('#author').value;
  const book = new Book(newTitle, newAuthor);
  listBooks.addBook(book);
  document.getElementById('form').reset();
});

// Remove Book
document.querySelector('#list-books').addEventListener('click', (e) => {
  listBooks.removeBook(e.target);
});

//
window.addEventListener('load', (e) => {
  e.preventDefault();
  const list = listBooks.getBooks();
  displayDateTime();
  list.forEach((book) => listBooks.addBookDOM(book));
});

// Navigation
document.querySelector('#nav-add-new-a').addEventListener('click', (e) => {
  e.preventDefault();
  const addNew = document.querySelector('#add-new');
  addNew.classList.remove('hiden');

  const list = document.querySelector('#list');
  list.classList.add('hiden');

  const contact = document.querySelector('#contact');
  contact.classList.add('hiden');
});

document.querySelector('#nav-list-a').addEventListener('click', (e) => {
  e.preventDefault();
  const list = document.querySelector('#list');
  list.classList.remove('hiden');

  const addNew = document.querySelector('#add-new');
  addNew.classList.add('hiden');

  const contact = document.querySelector('#contact');
  contact.classList.add('hiden');
});

document.querySelector('#nav-contact-a').addEventListener(('click'), (e) => {
  e.preventDefault();
  const contact = document.querySelector('#contact');
  contact.classList.remove('hiden');

  const addNew = document.querySelector('#add-new');
  addNew.classList.add('hiden');

  const list = document.querySelector('#list');
  list.classList.add('hiden');
});
