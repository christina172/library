let myLibrary=[];

function Book(title, author, year, pages, state) {
    this.title=title;
    this.author=author;
    this.year=year;
    this.pages=pages;
    this.state=state;
    this.info=function() {
        return `"${title}" by ${author}, written in ${year}, ${pages} pages, ${state}`
    }
};

const theMurderAtTheVicarage = new Book("The Murder at the Vicarage", "Agatha Christie", 1930, 256, true);
console.log(theMurderAtTheVicarage.info());
myLibrary.push(theMurderAtTheVicarage);

const nOrM = new Book("N or M?", "Agatha Christie", 1941, 289, false);
console.log(nOrM.info());
myLibrary.push(nOrM);

const deathComesAsTheEnd = new Book("Death Comes As the End", "Agatha Christie", 1944, 223, true);
console.log(deathComesAsTheEnd.info());
myLibrary.push(deathComesAsTheEnd);


const theClocks = new Book("The Clocks", "Agatha Christie", 1963, 256, false);
console.log(theClocks.info());
myLibrary.push(theClocks);

function addBookToLibrary() {
    myLibrary.push();
}

const container=document.querySelector(".container");

myLibrary.forEach(displayLibrary);

function displayLibrary(item) {
    const card=document.createElement("div");
    card.classList.add("card");
    const title=document.createElement("h2");
    title.textContent=`"${item.title}"`;
    const author=document.createElement("p");
    author.textContent=`Author: ${item.author}`;
    const date=document.createElement("p");
    date.textContent=`Publishing date: ${item.year}`;
    const pages=document.createElement("p");
    pages.textContent=`Pages: ${item.pages}`;
    const state=document.createElement("p");
    if (item.state) {
        state.textContent=`Read: yes`;
    } else {
        state.textContent=`Read: no`;
    }
    const changeButton=document.createElement("button");
    changeButton.classList.add("change");
    changeButton.textContent="Change read status";

    const removeButton=document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent="Remove from library";

    
    card.append(title, author, date, pages, state, changeButton, removeButton);
    container.append(card);

};

function openForm() {
    document.querySelector(".form-popup").style.display = "block";
  }
  
  function closeForm() {
    document.querySelector(".form-popup").style.display = "none";
  }







