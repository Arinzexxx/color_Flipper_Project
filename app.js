const hamburgerMenu = document.querySelector(".bars");

const toggleMobileNavigation = () => {
    hamburgerMenu.classList.toggle("active");
};
hamburgerMenu.addEventListener("click", toggleMobileNavigation);

// (function loadAllEventListeners() {
// }) ();


const changeColorButton2 = document.getElementById('btn');
function changeColor2() {
    const chosenColorUI = document.querySelector(".current-color"),
        colorArray = ["Orange","White", "Red", "Yellow", "Green", "Aqua", "Magenta", "brown", "aquamarine", "darkorchid", "yellowgreen",
            "hotpink", "indigo", "violet", "mediumslateblue",
            "gray", "black", "burlywood", "lightskyblue", "honeydew", "lightsalmon", "lavender", "lemonchiffon", "royalblue",
            "rosybrown", "purple", "pink", "midnightblue"],
        colorIndex = Math.floor(Math.random() * colorArray.length),
        chosenColor = colorArray[colorIndex];

    document.body.style.background = chosenColor;
    chosenColorUI.textContent = chosenColor;
    console.log(changeColorButton2);
    };
    
    changeColorButton2.addEventListener("click", changeColor2);
// ========================================================================================


