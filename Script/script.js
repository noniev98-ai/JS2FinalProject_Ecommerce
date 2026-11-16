const mobile = document.getElementById("mobile-menu");
const desktopNav= document.getElementById("desktopNav");
const icontheme = document.getElementById("icon-btn");


mobile.addEventListener("click", () => {
   desktopNav.classList.toggle("show");
});


/*  Theme witch */
icontheme.addEventListener("click",() => {
   document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("iconTheme", isLight
            ? "light"
            : "dark"
    );

    document.getElementById("themeIcon").textContent =
        isLight
            ? "☾"
            : "☀";  
});

/*load theme */
function loadTheme() {

    const theme = localStorage.getItem("iconTheme");
 
    if (theme === "light") {
        document.body.classList.add("light");
        document.getElementById("themeIcon").textContent = "☾";
    }
};