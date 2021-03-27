// Referred back to in-class demo and used the examples that were given.
// Created a variable (selection) to track the chosen cookie that was clicked.
var selection = Cookies.get("chosenCookie");
// Created a variable image and set it to the html tag with Id clicked image.
var image = document.getElementById("clickedImage");

// Checking the cookie and setting the image src.
if (selection === "tea") {
    image.setAttribute('src', 'img/teacookies.jpg');
} else if (selection === "monster") {
    image.setAttribute('src', 'img/monstersinc.jpg');
} else if (selection === "buddha") {
    image.setAttribute('src', 'img/buddhaLotus.jpg');
} else {
    // User did not choose a cookie, remove the image.  
    image.remove();
    // Set a message for the user to choose a cookie.
    document.getElementById("clickCookie").innerHTML = 'Uh oh..you forgot to pick a COOKIE..';
}
