

///////*STATE OBJECT*///////
let state = {

    currentPage: 0,

    views: [
        /*VIEW 1*/
        {headertext : "Welcome, traveller. Do you wish to know the arcane secrets of the orb?",
        recbutton : null,
        helpertext : " ",
        circlebutton : "yes?",
        },

        /*VIEW 2*/
        {headertext: "Very well. Conjure in your mind's eye a number between 01 and 99.",
        recbutton : "proceed",
        helpertext :"we may proceed once you have concluded your contemplation",
        circlebutton : "reset",
        },

        /*VIEW 3*/
        {headertext : "Calculate the sum of both digits to obtain a new number.",
        recbutton : "yes, proceed",
        helpertext : "for example:: 14 is 1 + 4 = 5. are you prepared to proceed?",
        circlebutton : "reset",
        },

        /*VIEW 4*/
        {headertext : "Subtract your new number from the original number",
        recbutton : "continue",
        helpertext : "for example: 14 - 5 = 9. shall we continue?",
        circlebutton : "reset",
        },

        /*VIEW 5*/
        {headertext : "<em> the orb resonates with mysterious power </em> <br> 1 - ๐ <br> 2 - <em> Higitus figitus zumbakazing!! </em> <br> 3 - toads. <br> 4 - ๐ <br> 5 - โโ ||๐นโ แตแใช โทแทแโธ โธ ฬฃ โโแญ ||๐นโ แโทแท แ nerd <br> 6 - ๐ <br> 7 - ใใฎๆ็ซ ใ็ฟป่จณใใ่ใฏใไธๅฃใฎใใใใใซๅชใใใฆใใใฎใงใใใ <br> 8 - ๐ฆ <br> 9 - Everyone saw that embarassing thing you did. <br> 10 - afob fo sdnah eht ta hsirep tlahs uoht",
        recbutton : "peer", 
        helpertext : "there is no going back now. peer into the orb, traveller",
        circlebutton : "reset",
        },

        /*VIEW 6*/
        {headertext : "the orbs speaks: <em> Everyone saw that embarassing thing you did. </em>",
        recbutton : null,
        helpertext : "your fate is revealed. remember, traveller. knowledge is a powerful and dangerous thing.",
        circlebutton : "reset",
        },
    ]
}

///////*VARIABLES*///////

var headerText = document.getElementById("header");
var helperText = document.getElementById("helper");
var recbutton = document.getElementById("recbutton");
var circlebutton = document.getElementById("circlebutton");


///////* FUNCTIONS *///////

/*โ*/ function updatePage() { 
    headerText.innerHTML = state.views[state.currentPage].headertext;
    helperText.textContent = state.views[state.currentPage].helpertext;
    recbutton.textContent = state.views[state.currentPage].recbutton;  
    circlebutton.textContent = state.views[state.currentPage].circlebutton; 
    
    toggleRecButton()

}/* changes page to next view when circle button is clicked */
/* swap to recbutton after View 1*/

circlebutton.addEventListener ("click", () => {state.currentPage++, updatePage(), circlebutton.style.display = 'none'});
/* ^^ change style to display = none to "remove" first button*/


/////*CREATE RESET BUTTON*/////
var resetbutton = document.createElement("button");
    resetbutton.innerHTML = "reset";
    resetbutton.className = "resetbutton";
    resetbutton.setAttribute('id', 'resetbutton'); /*add ID to be used in toggleButtons function*/
    resetbutton.setAttribute('title', 'imbibe tincture of amnesia');
    document.body.appendChild(resetbutton);
    
/////*FUNCTIONS CONTINUED*/////

/*โ*/ function toggleRecButton() { /*add and remove Next/Reveal button according to View number*/
    console.log("toggleRecButton");
    var recbutton = document.getElementById('recbutton');
    if (state.currentPage === 0 || state.currentPage === 5){
            recbutton.classList.add('d-none')}
        else{
            recbutton.classList.remove('d-none')
            recbutton.classList.add('d-block')};

    var resetbutton = document.getElementById('resetbutton');
    if (state.currentPage === 0 || state.currentPage === 6){
            resetbutton.classList.add('d-none')}
        else{
            resetbutton.classList.remove('d-none')
            resetbutton.classList.add('d-block')};
}

    toggleRecButton()

recbutton.addEventListener ("click", () => {state.currentPage++, updatePage()})


/*โ*/ function resetPage(){ /*return to View 0 (first "page") */
    if (state.currentPage > 0){
        state.currentPage = 0;

        updatePage();
        circlebutton.style.display = 'block'
    }
}

resetbutton.addEventListener ("click", () => {resetPage()});

