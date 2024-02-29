// building functions for testability lab

const fieldCatch = document.querySelector("fieldSuggestion")
const fieldHTMLBox = document.querySelector("fieldRecs")

const bookCatch = document.querySelector("bookTitle")
const authorCatch = document.querySelector("bookAuthor")
const bookHTMLBox = document.querySelector("bookRecs")




function placeStudyRec(res) {       // unfinished
    fieldCatch.value = ''
    fieldHTMLBox.innerHTML = ''

    res.data.forEach((fieldName, index) => {
        fieldHTMLBox.innerHTML += `<p name = ${index}>${fieldName}</p>`
    })
}

function placeBookRec(res) {        // unfinished
    bookCatch.value = ''
    authorCatch.value = ''
    bookHTMLBox.innerHTML = ''

    res.data.forEach((bookName, bookAuthor, index) => {
        bookHTMLBox.innerHTML += `<p name = ${index}> ${bookName} Written by ${bookAuthor}`
    })
}
