"use strict"

const books = document.querySelectorAll('.book');
books[0].before(books[1]);
books[4].after(books[3]);
books[5].after(books[2]);

document.body.style.backgroundImage =
    "url('./image/you-dont-know-js.jpg')"

let title = books[4].querySelector('h2');
title.innerHTML = "<a>Книга 3. this и Прототипы Объектов</a>"


const ad = document.querySelector('.adv');
ad.remove();

let listOfBook = books[0].querySelectorAll('li');


listOfBook[3].after(listOfBook[6])
listOfBook[6].after(listOfBook[8])
listOfBook[9].after(listOfBook[2])

let listOf5Book = books[5].querySelectorAll('li');
listOf5Book[3].before(listOf5Book[9])
listOf5Book[4].after(listOf5Book[2])
listOf5Book[8].before(listOf5Book[5])

let listOf6Book = books[2].querySelectorAll('li');
const newElem = document.createElement('li');
newElem.innerHTML = '<b> Глава 8: За пределами ES6 </b>';
listOf6Book[8].append(newElem);