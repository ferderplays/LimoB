const maximizeapp = document.getElementById("maximizebtn")
const minimizeapp = document.getElementById("minimizebtn")
const closeapp = document.getElementById("closebtn")
const bodyelem = document.getElementById("tochange")

maximizeapp.addEventListener("click", function() {
    app.window.maximize()
})

minimizeapp.addEventListener("click", function() {
    app.window.minimize()
})

closeapp.addEventListener("click", function() {
    app.window.close()
})