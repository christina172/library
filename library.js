const myLibrary = [];
const submitButton = document.querySelector(".submit");
const container = document.querySelector(".container");
const form = document.querySelector("form");

class Book {
  constructor(title, author, year, pages, state) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.state = state;
  }
  info() {
    return `"${title}" by ${author}, written in ${year}, ${pages} pages, ${state}`;
  }
}

const theMurderAtTheVicarage = new Book(
  "The Murder at the Vicarage",
  "Agatha Christie",
  1930,
  256,
  true,
);
console.log(theMurderAtTheVicarage.info());
myLibrary.push(theMurderAtTheVicarage);

const nOrM = new Book("N or M?", "Agatha Christie", 1941, 289, false);
console.log(nOrM.info());
myLibrary.push(nOrM);

const deathComesAsTheEnd = new Book(
  "Death Comes As the End",
  "Agatha Christie",
  1944,
  223,
  true,
);
console.log(deathComesAsTheEnd.info());
myLibrary.push(deathComesAsTheEnd);

const theClocks = new Book("The Clocks", "Agatha Christie", 1963, 256, false);
console.log(theClocks.info());
myLibrary.push(theClocks);

function displayLibrary(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  const title = document.createElement("h2");
  title.textContent = `"${item.title}"`;
  const description = document.createElement("div");
  description.classList.add("description");
  const author = document.createElement("p");
  author.textContent = `Author: ${item.author}`;
  const date = document.createElement("p");
  date.textContent = `Publishing date: ${item.year}`;
  const pages = document.createElement("p");
  pages.textContent = `Pages: ${item.pages}`;
  const state = document.createElement("p");
  if (item.state) {
    state.textContent = "Read: yes";
  } else {
    state.textContent = "Read: no";
    card.classList.add("unread");
  }
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  const changeButton = document.createElement("button");
  changeButton.classList.add("change");
  changeButton.textContent = "Change read status";
  changeButton.addEventListener("click", () => {
    if (item.state) {
      item.state = false;
      state.textContent = "Read: no";
      card.classList.add("unread");
    } else {
      item.state = true;
      state.textContent = "Read: yes";
      card.classList.remove("unread");
    }
  });

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.textContent = "Remove from library";
  removeButton.addEventListener("click", () => {
    container.removeChild(card);
  });

  description.append(author, date, pages, state);
  buttons.append(changeButton, removeButton);

  card.append(title, description, buttons);

  container.append(card);
}

function addBookToLibrary(e) {
  e.preventDefault();
  const checkVal = form.checkValidity();
  form.reportValidity();
  if (checkVal) {
    const titleForm = document.getElementById("title").value;
    const authorForm = document.getElementById("author").value;
    const yearForm = document.getElementById("year").value;
    const pagesForm = document.getElementById("pages").value;
    const stateForm = document.getElementById("state").checked;
    const newBook = new Book(
      titleForm,
      authorForm,
      yearForm,
      pagesForm,
      stateForm,
    );
    myLibrary.push(newBook);
    document.querySelector("form").reset();
    displayLibrary(newBook);
    document.querySelector(".form-popup").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  submitButton.addEventListener("click", addBookToLibrary);
});

myLibrary.forEach(displayLibrary);

function openForm() {
  document.querySelector(".form-popup").style.display = "block";
}

function closeForm() {
  document.querySelector(".form-popup").style.display = "none";
  document.querySelector("form").reset();
}
