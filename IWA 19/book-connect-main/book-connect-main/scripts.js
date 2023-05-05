import {BOOKS_PER_PAGE, authors, books, genres } from "./data.js"
const matches = books;
const page = 1;

if (!books && !Array.isArray(books)) {
    throw new Error('Source required') //fixed if statement syntax
} 
if (!range && range.length < 2) {
    throw new Error('Range must be an array with two numbers') // fixed if statement syntax
}

const  day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

const  night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}
/*
*For the display of books
*/
const booksFragment = document.createDocumentFragment();
const extractedBooks = books.slice(0, 36);
const [author, image, title, id] = books;
// set for loop to stop when the "extractedBooks" var is equal to 36
 for (let i = 0 ; books[i] < extractedBooks.length; i++) { 
     const preview = createPreview({
         author: extractedBooks[i][author],
         id: extractedBooks[i][id],
         image: extractedBooks[i][image],
         title:extractedBooks[i][title],
    })

    booksFragment.appendChild(preview)
}
const dataListItems = document.querySelector(`[data-list-items]`).appendChild(booksFragment)
/* 
*For the display of Genres
*/ 
const genresFragment = document.createDocumentFragment(); // changed var genres to genresFragment as to not confused code with the genres array , and to be used as temp data placeholder
let genreElement = document.createElement('option'); // changed the element variable to genreElement and made it let so that it can be changed later on
//these are used as a sort of placeholder for if the loop does not work 
genreElement.value = 'any';
genreElement.innerText = 'All Genres';
genresFragment.appendChild(genreElement);4

for (const [id, name] of Object.entries(genres)) { 
    document.createElement('option');
    genreElement.value = id ;
    genreElement.innerText = name;
    genres.appendChild(genreElement);
}

const dataSearchGenres = document.querySelector('[data-search-genres]').appendChild(genresElement); //created new var to return the appended genresElement var  
/* 
*For the display of authors
*/ 
const authorsFragment = document.createDocumentFragment(); // changed var authors to authorsFragment as to not confused code with the genres array , and to be used as temp data placeholder
let authorsElement = document.createElement('option');
authorsElement.value = 'any';
authorsElement.innerText = 'All Authors';
authorsFragment.appendChild(authorsElement);

for (const [id, name] of Object.entries(authors)) {
    document.createElement('option');
    authorsElement.value = id;
    authorsElement.innerText = name;
    authorsFragment.appendChild(authorsElement);
}

const dataSearchAuthors = document.querySelector('[data-search-authors]').appendChild(authorsFragment)


// Conditionals for the settings of light/dark mode
const dataSettingsTheme = document.querySelector('[data-settings-theme]')

//window.matchMedia returns a new MediaQueryList object that can then be used to determine if the document matches the media query string, 
//as well as to monitor the document to detect when it matches (or stops matching) that media query.
dataSettingsTheme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';

dataSettingsTheme.style.setProperty('--color-dark', css[v].dark); // returns value of v; what is css equal to?
dataSettingsTheme.style.setProperty('--color-light', css[v].light);


const dataSearchOverlay =
const dataSettingsOverlay =
const dataSearchCancel = 
const dataSearchAuthors =
const dataSearchTitle = 
const dataSearchGenres =
const dataSettingsCancel = 

// // For the button to show more books
// const dataListButton = document.querySelector('[data-list-button]');

// if (books.length - [page * BOOKS_PER_PAGE] <= 0){//disables button if conditional is true
//     dataListButton.disabled = true;
    
// } else {
//     dataListButton.innerHTML = //previously an array 
//     `
//     <span>Show more</span>
//     <span class="list__remaining">(${books.length - [page * BOOKS_PER_PAGE] > 0 ? books.length - [page * BOOKS_PER_PAGE] : ''})</span>
//     `
// };


// //LOGIC FOR EVENT LISTENERS    

// const dataSearchOverlay = document.querySelector('[data-search-overlay]')//dialog box to be made visible
// const dataHeaderSearch = document.querySelector('[data-header-search]') //button
// //when the dataHeaderSearch button is clicked, the dataSearchOverlay dialogue pops appears
// dataHeaderSearch.addEventListener(
//     'click', 
//     () => {
//         dataSearchOverlay.setAttribute('open', true)
//     }
// )


// const dataSearchTitle = document.querySelector('[data-search-title]')
// dataSearchOverlay.addEventListener(
//     'click',
//     () => {
//         dataSearchOverlay.open === true
//         dataSearchTitle.focus()
//     }
// )
// data-search-cancel.addEventListener(document.querySelector('[data-search-overlay]').open === false )
// const dataSearchCancel = document.querySelector('[data-search-overlay]').addEventListener 
// data-settings-cancel.click() { querySelect('[data-settings-overlay]').open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.addEventListener('click', () => html.add.overlay.close() ) { data-list-active.open === false }

// data-list-button.click() 
//     document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
//     actions.list.updateRemaining()
//     page = page + 1
// }

// data-header-search.click() {
//     data-search-overlay.open === true ;
//     data-search-title.focus();
// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if (singleGenre = filters.genre) { genreMatch === true }}}
//         }

//         if (titleMatch && authorMatch && genreMatch) {
//             result.push(book)
//         }
//     }

//     if (display.length < 1)  {
//     data-list-message.class.add('list__message_show')}
//     else {data-list-message.class.remove('list__message_show')
    

//     data-list-items.innerHTML = ''
//     const fragment = document.createDocumentFragment()
//     const extractedBooks = source.slice(range[0], range[1])
//     }
//     for ({ author, image, title, id }; extractedBooks; i++) {
//         const { author: authorId, id, image, title } = props

//         element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[authorId]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }
    
//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay.open === false
// }

// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if (active) 
//         break;
//         const previewId = node?.dataset?.preview
    
//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         } 
//     }
    
//     if (!active){ 
//     return (data-list-active.open === true)
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title
    
//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description }
// }
