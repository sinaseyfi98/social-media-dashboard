let darkmode = localStorage.getItem("darkmode");
const darkModeToggle = document.querySelector("#dark_mode_toggle");


const enableDarkMode = () => {

    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "enabled");
};

const disableDrakMode = () => {

    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);

};

if (darkmode === "enabled") {

    enableDarkMode();
    document.querySelector("input").setAttribute("checked", "checked");


}

darkModeToggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode !== "enabled") {

        enableDarkMode();
    } else {
        disableDrakMode();
    }

});