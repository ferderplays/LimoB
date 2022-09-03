const discordinbrowser = document.getElementById("discordwebframe")
const discordbutton = document.getElementById("discordlogo")
const maximizeapp = document.getElementById("maximizebtn")
const minimizeapp = document.getElementById("minimizebtn")
const closeapp = document.getElementById("closebtn")
const bodyelem = document.getElementById("tochange")

let isShow = false

discordbutton.addEventListener("click", function() {
    toggleDiscord()
})

maximizeapp.addEventListener("click", function() {
    app.window.maximize()
})

minimizeapp.addEventListener("click", function() {
    app.window.minimize()
})

closeapp.addEventListener("click", function() {
    app.window.close()
})

function toggleDiscord() {
    if (isShow) {
        discordinbrowser.style.display = "none"
        isShow = false
    } else {
        discordinbrowser.style.display = "block"
        isShow = true
    }
}