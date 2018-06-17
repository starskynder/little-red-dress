// Select menu icon
const menuSymbol = document.getElementById("menu-symbol");
// Select all menu-items
const menu = document.getElementsByClassName("menu-item");


let clicked = false;


// If menu icon is not clicked the menu items won't show else they show up
let showMenu = () => {
    
    if (!clicked) {
        for (let i = 1; i < menu.length; i++) {
            menu[i].style.display = "block";
            clicked = true;
        }
    } else {
        for (let i = 1; i < menu.length; i++) {
            menu[i].style.display = "none";
            clicked = false;
        }
    }
}

//Add event listener to menu-icon
menuSymbol.addEventListener("click", showMenu);