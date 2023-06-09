var settingsMenu=document.querySelector(".Settings-menu");

var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("Settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    if(localStorage.getItem("theme")=="light"){
        localStorage.getItem("theme", "light")
    }
    else{
        localStorage.getItem("theme","light")
    }
}

if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on")
    darkBtn.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dark-btn-on")
    darkBtn.classList.add("dark-theme")
}else{
    localStorage.setItem("theme","light")
}


localStorage.setItem("theme", "dark");
localStorage.getItem("theme");