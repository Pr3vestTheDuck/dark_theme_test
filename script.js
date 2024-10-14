const toggle = document.getElementById("toggle");
const toggleText = document.getElementById("toggle_text");
const body = document.body;

toggle.addEventListener("click", () =>{
    const isDarkMode =  body.classList.contains("dark-bg");

    if(isDarkMode){
        body.classList.remove("dark-bg","text-dark");
        toggleText.textContent = "Light mode:";
    }
    else{
        body.classList.add("dark-bg","text-dark");
        toggleText.textContent = "Dark mode:";
    }
});