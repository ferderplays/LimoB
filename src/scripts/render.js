const discordinbrowser = document.getElementById("discordwebframe")
const discordbutton = document.getElementById("discordlogo")
const maximizeapp = document.getElementById("maximizebtn")
const minimizeapp = document.getElementById("minimizebtn")
const urlbarbtn = document.getElementById("urlbarbutton")
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

const settingsbar = document.getElementById('settingsbox')
const settingsbtn = document.getElementById('settingsbutton')
const applybtn = document.getElementById('applybtn')

let isShown = false;

settingsbtn.onclick = () => {
    toggleSettings()
}

applybtn.onclick = () => {
    loadColors()
}

function toggleDiscord() {
    if (isShow) {
        discordinbrowser.style.display = "none"
        isShow = false
    } else {
        discordinbrowser.style.display = "block"
        isShow = true
    }
}

urlbarbtn.onclick = () => {
    const newtab = document.getElementById("newtab")
    const urlbartxt = document.getElementById("urlbarbox")
    if (urlbartxt.value == '/newtab') {
        newtab.setAttribute("src", "./newline/index.html")
    } else {
        newtab.setAttribute("src", "https://" + urlbartxt.value)
    }
}

function toggleSettings() {
    if (isShown) {
        setTimeout(setDisplay("none"), 1000)
        isShown = false
    } else {
        setTimeout(setDisplay("block"), 1000)
        isShown = true
    }
}

function setDisplay(displayval) {
    settingsbar.style.display = displayval
}

function loadColors() {
    // value
    const tsize = document.getElementById('tsztxt').value
    const ccolor = document.getElementById("ccclrtxt").value
    const blbcolor = document.getElementById("blbclrtxt").value
    const nbgcolor = document.getElementById("nbgclrtxt").value // navbar backgrounds
    const nvbcolor = document.getElementById("nvbclrtxt").value
    const hdrcolor = document.getElementById("hdrclrtxt").value
    const gtdicolor = document.getElementById("gtdiclrtxt").value
    const sbbgcolor = document.getElementById("sbbgclrtxt").value
    const sbbccolor = document.getElementById("sbbcclrtxt").value
    const sbbbgcolor = document.getElementById("sbbbgclrtxt").value
    const sbbcolor = document.getElementById("sbbclrtxt").value
    

    // elements
    const bodyelem = document.querySelector("body")
    const headerelem = document.querySelector('header')
    const browserlogo = document.querySelector('.logo')
    const navbar = document.querySelector('.navbar-container')
    const navbar2 = document.querySelector('.navbar-bordered')
    const settingsbox = document.querySelector('.settings-box')
    const sidebar = document.querySelector('.sidebar-container')
    const gotodomainicon = document.querySelector('.url-bar-container svg path')

    // style-setters
    setStyle(bodyelem, 'font-size', tsize + "px")
    setStyle(navbar, 'background', nbgcolor)
    setStyle(bodyelem, 'caret-color', ccolor)
    setStyle(sidebar, 'background', sbbbgcolor)
    setStyle(sidebar, 'border-color', sbbcolor)
    setStyle(navbar2, 'border-color', nvbcolor)
    setStyle(gotodomainicon, 'fill', gtdicolor)
    setStyle(headerelem, 'background', hdrcolor)
    setStyle(settingsbox, 'background', sbbgcolor)
    setStyle(browserlogo, 'border-color', blbcolor)
    setStyle(settingsbox, 'border-color', sbbccolor)
}

function setStyle(element, styleval, value) {
    element.style[styleval] = value
}

const backb = document.getElementById("backbtn")
const reloadb = document.getElementById("reloadbtn")
const forwardb = document.getElementById("forwardbtn")
const webview = document.querySelector('webview#newtab')

forwardb.onclick = () => {
    if (webview.canGoForward()) {
        webview.goForward()
    }
}

reloadb.onclick = () => {
    webview.reload()
}

backb.onclick = () => {
    if (webview.canGoBack()) {
        webview.goBack()
    }
}