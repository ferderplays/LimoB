const steampoweredbutton = document.getElementById("steampoweredlogo")
const discordinbrowser = document.getElementById("discordwebframe")
const headphonesbutton = document.getElementById("headphoneslogo")
const instagrambutton = document.getElementById("instagramlogo")
const implbutton = document.getElementById("utilsimplbutton")
const discordbutton = document.getElementById("discordlogo")
const netflixbutton = document.getElementById("netflixlogo")
const redditbutton = document.getElementById("redditlogo")
const tiktokbutton = document.getElementById("tiktoklogo")
const maximizeapp = document.getElementById("maximizebtn")
const minimizeapp = document.getElementById("minimizebtn")
const urlbarbtn = document.getElementById("urlbarbutton")
const closeapp = document.getElementById("closebtn")
const bodyelem = document.getElementById("tochange")

let isShow = false


steampoweredbutton.addEventListener("click", function() {
    app.window.spwrwidget()
})

headphonesbutton.addEventListener("click", function() {
    app.window.hpwidget()
})

instagrambutton.addEventListener("click", function() {
    app.window.igwidget()
})

implbutton.addEventListener("click", function() {
    app.window.utilsimpl()
})

discordbutton.addEventListener("click", function() {
    app.window.dscwidget()
})

netflixbutton.addEventListener("click", function() {
    app.window.nfwidget()
})

redditbutton.addEventListener("click", function() {
    app.window.rwidget()
})

tiktokbutton.addEventListener("click", function() {
    app.window.ttwidget()
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

let isShown = false, isShown2 = false;

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

const colorselectionmenu = document.querySelector(".settings-inner-box")
const occmbtn = document.getElementById("occmbtn")

occmbtn.onclick = () => {
    toggleColorSecletion()
}

function toggleColorSecletion() {
    if (isShown2) {
        colorselectionmenu.style.display = "none"
        isShown2 = false
    } else {
        colorselectionmenu.style.display = "block"
        isShown2 = true
    }
}

const newtab = document.getElementById("newtab")
const urlbartxt = document.getElementById("urlbarbox")

urlbarbtn.onclick = () => {
    if (urlbartxt.value == 'limob://newtab' || urlbartxt.value == "/newtab") {
        newtab.setAttribute("src", "./newline/index.html")
    } else if (urlbartxt.value.includes(".") && urlbartxt.value.includes(" ") || urlbartxt.value.includes(" ") || !urlbartxt.value.includes(".") || urlbartxt.value != "limob://newtab" || urlbartxt.value != "/newtab") {
        newtab.setAttribute("src", "https://google.com/search?q=" + urlbartxt.value + "&client=limob&clientdev=limodevelopment") 
    } else if (urlbartxt.value.includes("github") && !(urlbartxt.value.startsWith("github.com"))) {
        newtab.setAttribute("src", "./blocked/index.html")
    } else if (urlbartxt.value.includes("google") && !(urlbartxt.value.startsWith("google.com"))) {
        newtab.setAttribute("src", "./blocked/index.html")
    } else if (urlbartxt.value.includes("youtube") && !(urlbartxt.value.startsWith("youtube.com"))) {
        newtab.setAttribute("src", "./blocked/index.html")
    } else if (urlbartxt.value.includes("codepen") && !(urlbartxt.value.startsWith("codepen.io"))) {
        newtab.setAttribute("src", "./blocked/index.html")
    } else if (urlbartxt.value.endsWith(".onion")) {
        newtab.setAttribute("src", "./blocked/index.html")
    } else if (urlbartxt.value.startsWith("C:/")) {
        newtab.setAttribute("src", "file://" + urlbartxt.value)
    } else if (urlbartxt.value.startsWith("C:\\")) {
        newtab.setAttribute("src", "file://" + urlbartxt.value)
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
    const settingsinnerbox = document.querySelector('.settings-inner-box')
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
    setStyle(settingsinnerbox, 'background', sbbgcolor)
    setStyle(settingsinnerbox, 'border-color', sbbccolor)
}

function setStyle(element, styleval, value) {
    element.style[styleval] = value
}

const backb = document.getElementById("backbtn")
const reloadb = document.getElementById("reloadbtn")
const dtbtn = document.getElementById("devtoolsbtn")
const forwardb = document.getElementById("forwardbtn")
const webview = document.querySelector('webview#newtab')

forwardb.onclick = () => {
    if (webview.canGoForward()) {
        webview.goForward()
    }
}

dtbtn.onclick = () => {
    app.window.devtools()
    webview.openDevTools({
        node: "right"
    })
}

reloadb.onclick = () => {
    webview.reload()
}

backb.onclick = () => {
    if (webview.canGoBack()) {
        webview.goBack()
    }
}

const themeinput = document.getElementById("themefileinput")
const themebutton = document.getElementById("applythemebtn")

themebutton.onclick = () => {
    themeinput.click()
}

var themeresult
var fr = new FileReader()

themeinput.addEventListener("change", function() {
    if (themeinput.value) {
        fr.onload = function() {
            themeresult = fr.result
            if (themeresult.includes("navbar-background")) {
                const elem = document.querySelector(".navbar-container")
                const color = themeresult.substring(themeresult.indexOf(":") + 1).replace(";", "")
                setStyle(elem, 'background', color)
            }

            if (themeresult.includes("navbar-border")) {
                const elem = document.querySelector(".navbar-bordered")
                const color = themeresult.substring(themeresult.indexOf(":") + 1).replace(";", "")
                setStyle(elem, 'border-color', color)
            }
        }
        fr.readAsText(this.files[0])
    }
})