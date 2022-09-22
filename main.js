

///////*STATE OBJECT*///////
let state = {

    currentPage: 0,

    views: [
        /*VIEW 1*/
        {headertext : "I can read your mind",
        recbutton : null,
        helpertext : " ",
        circlebutton : "go", /* --> proceed to VIEW 2*/
        },

        /*VIEW 2*/
        {headertext: "Pick a number from 01-99",
        recbutton : "NEXT", /* --> proceed to VIEW 3 */
        helpertext :"when you have your number click next",
        circlebutton : "reset",/*resetPage(), /* --> return to VIEW 1 */
        },

        /*VIEW 3*/
        {headertext : "Add both digits together to get a new number",
        recbutton : "NEXT", /* --> proceed to VIEW 4 */
        helpertext : "Ex: 14 is 1 + 4 = 5, click Next to proceed",
        circlebutton : "reset",/*resetPage() /* --> return to VIEW 1 */
        },

        /*VIEW 4*/
        {headertext : "Subtract your new number from the original number",
        recbutton : "NEXT", /*--> proceed to VIEW 5*/
        helpertext : "Ex: 14 - 5 = 9",
        circlebutton : "reset",/*resetPage() /*--> return to VIEW 1 */
        },

        /*VIEW 5*/
        {headertext : "SYMBOLS",
        recbutton : "REVEAL", /*--> proceed to VIEW 6*/
        helpertext : "Find your new number. Note the symbol beside the number",
        circlebutton : "reset",/*resetButton(), /*--> return to VIEW 1*/
        },

        /*VIEW 6*/
        {headertext : null,/*displaySymbols(), /* --> replace header text with randomized symbol obtained from function*/
        recbutton : null,
        helpertext : "Your symbol is ???"  /*displaySymbol()*/,
        circlebutton : "reset",/*resetPage(),/* --> return to VIEW 1*/
        },
    ]
}

///////*VARIABLES*///////

var headerText = document.getElementById("header");
var helperText = document.getElementById("helper");
var recbutton = document.getElementById("recbutton");
var circlebutton = document.getElementById("circlebutton");


///////* FUNCTIONS *///////

/*✅*/ function updatePage() { 
    headerText.textContent = state.views[state.currentPage].headertext;
    helperText.textContent = state.views[state.currentPage].helpertext;
    recbutton.textContent = state.views[state.currentPage].recbutton;  
    circlebutton.textContent = state.views[state.currentPage].circlebutton; 
    
    toggleRecButton()

}/* changes page to next view when circle button is clicked */
/* swap to recbutton after View 1*/

circlebutton.addEventListener ("click", () => {state.currentPage++, updatePage(), circlebutton.style.display = 'none'});
/* ^^ change style to display = none to "remove" first button*/


/////*NEW BUTTON*/////
var resetbutton = document.createElement("button");
    resetbutton.innerHTML = "reset";
    document.body.appendChild(resetbutton);


/*✅*/ function toggleRecButton() { /*add and remove Next/Reveal button according to view number*/
    console.log("toggleRecButton");
    var recbutton = document.getElementById('recbutton');
    if (state.currentPage === 0 || state.currentPage === 5){
            recbutton.classList.add('d-none')}
        else{
            recbutton.classList.remove('d-none')
            recbutton.classList.add('d-block')};
}

    toggleRecButton()

recbutton.addEventListener ("click", () => {state.currentPage++, updatePage()})


/*✅*/ function resetPage(){ /*return to View 0 (first "page") */
    if (state.currentPage > 0){
        state.currentPage = 0;

        updatePage();
        circlebutton.style.display = 'block'
    }
}

resetbutton.addEventListener ("click", () => {resetPage()});
    

   /*
function resetPage() { /* returns to View 1 */

/* SYMBOLS
for loop to loop through symbols, use template literal to insert number that it loops through



/*function toggleButton() { /* shows or hides button upon page update */
/* appendChild to add button???
how do I remove the button???*/

