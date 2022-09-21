


let state = {
    views: [
        /*VIEW 1*/
        {headertext : "I can read your mind",
        recbutton : NULL,
        helpertext : NULL,
        circlebutton : "NEXT", updatePage(), /* --> proceed to VIEW 2*/
        },

        /*VIEW 2*/
        {headertext: "Pick a number from 01-99",
        recbutton : "NEXT", updatePage(), /* --> proceed to VIEW 3 */
        helpertext :"when you have your number click next",
        circlebutton : resetPage(), /* --> return to VIEW 1 */
        },

        /*VIEW 3*/
        {headertext : "Add both digits together to get a new number",
        recbutton : "NEXT", updatePage(), /* --> proceed to VIEW 4 */
        helpertext : "Ex: 14 is 1 + 4 = 5, click Next to proceed",
        circlebutton : resetPage() /* --> return to VIEW 1 */
        },

        /*VIEW 4*/
        {headertext : "Subtract your new number from the original number",
        recbutton : "NEXT", updatePage(), /*--> proceed to VIEW 5*/
        helpertext : "Ex: 14 - 5 = 9",
        circlebutton : resetPage() /*--> return to VIEW 1 */
        },

        /*VIEW 5*/
        {headertext : displaySymbols(), "SYMBOL",
        recbutton : "REVEAL", updatePage(), /*--> proceed to VIEW 6*/
        helpertext : "Find your new number. Note the symbol beside the number",
        circlebutton : resetButton(), /*--> return to VIEW 1*/
        },

        /*VIEW 6*/
        {headertext : displaySymbols(), /* --> replace header text with randomized symbol obtained from function*/
        recbutton : "NULL",
        helpertext : "Your symbol is" + displaySymbol(),
        circlebutton : resetButton(),/* --> return to VIEW 1*/
        },


    ]




}

