# MIND READER

## ABOUT
- a single page web app that plays a game with the user to read their mind.
- progress forward to the next view, backward to the previous view, and reset to the first view on the page.
- the app should prompt the user to click through the single-page app and see a new view for every step.
- You need to be able to scroll through the numbers to find your symbol (page 5 on the wireframe).
- The mind reader also happens to have a fun math gimmick based on the factors of 9. This is not something you need to program, people will do the math in their heads.

## INIT: create variables
1. HEADERTEXT
  > * PROPERTIES: present+"text"
2. RECTANGLE BUTTON
  > * PROPERTIES: NULL, present+"text"
3. HELPERTEXT:  
  > * PROPERTIES: NULL, present+"text"
4. CIRCLE BUTTON
  > * PROPERTIES: NULL, present+"text"
5. VIEWS array
  > * add values for each page according to PAGES section below
6. SYMBOLS array ????????????????????
  > * add values and randomize function
7. CURRENTPAGE
 > * stores value of current page based on VIEWS array



## PAGES
1. VIEW 1 
  >headertext: "I can read your mind"
  >recbutton: NULL
  >helpertext: NULL
  >circlebutton: "NEXT", updatePage() --> proceed to VIEW 2
2. VIEW 2
  >headertext: "Pick a number from 01-99"
  >recbutton: "NEXT", updatePage() --> proceed to VIEW 3
  >helpertext:"when you have your number click next"
  >circlebutton: resetPage() --> return to VIEW 1
3. VIEW 3
  >headertext: "Add both digits together to get a new number"
  >recbutton: "NEXT", updatePage() --> proceed to VIEW 4
  >helpertext: "Ex: 14 is 1 + 4 = 5, click Next to proceed"
  >circlebutton: resetPage() --> return to VIEW 1
4. VIEW 4
  >headertext: "Subtract your new number from the original number"
  >recbutton: "NEXT", updatePage() --> proceed to VIEW 5
  >helpertext: "Ex: 14 - 5 = 9"
  >circlebutton: resetPage() --> return to VIEW 1
5. VIEW 5
  >headertext: displaySymbols(), "SYMBOL"
  >recbutton: "REVEAL", updatePage() --> proceed to VIEW 6
  >helpertext: "Find your new number. Note the symbol beside the number"
  >circlebutton: resetButton() --> return to VIEW 1
6. VIEW 6
  >headertext: displaySymbols() --> replace header text with randomized symbol obtained from function
  >recbutton: "NULL"
  >helpertext: "Your symbol is" + displaySymbol()
  >circlebutton: resetButton() --> return to VIEW 1


## FUNCTIONALITY ????????????????

**FUNCTION updatePage**: changes page to next view when circle button is clicked
1. INPUT click button
2. RETRIEVE page properties of next page (current page + 1)

**FUNCTION resetPage**: returns to View 1
1. INPUT click button
2. RETRIEVE page properties of VIEW 1

**FUNCTION showHideButton**: shows or hides button upon page update





## START: begin program; make green tea according to user input

## END: end program; enjoy tea

