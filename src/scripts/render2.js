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
    const tsize = document.getElementById('tsztxt')
    const ccolor = document.getElementById("ccclrtxt").value
    const bgcolor = document.getElementById("bgclrtxt").value
    const brcolor = document.getElementById("brclrtxt").value
    const sbcolor = document.getElementById("sbclrtxt").value
    const sicolor = document.getElementById("siclrtxt").value
    const hdrcolor = document.getElementById("hdrclrtxt").value
    const gtdicolor = document.getElementById("gtdiclrtxt").value
    const sbbgcolor = document.getElementById("sbbgclrtxt").value
    const sbbccolor = document.getElementById("sbbcclrtxt").value
    

    // elements
    const bodyelem = document.querySelector("body")
    const headerelem = document.querySelector('header')
    const settingsbox = document.querySelector('.settings-box')
    const searchbar = document.querySelector('.search-bar-form')
    
    const searchbartext = document.querySelector('.search-bar-box')
    const searchbarbutton = document.querySelector('.search-bar-button')
    const searchbaricon = document.querySelectorAll('.search-icon svg path')
    const gotodomainicon = document.querySelector('.url-bar-container svg path')

    // style-setters
    searchbaricon.forEach(path => {
        setStyle(path, 'fill', sicolor)
    })
    setStyle(bodyelem, 'font-size', tsize)
    setStyle(bodyelem, 'caret-color', ccolor)
    setStyle(searchbar, 'background', bgcolor)
    setStyle(gotodomainicon, 'fill', gtdicolor)
    setStyle(headerelem, 'background', hdrcolor)
    setStyle(searchbartext, 'border-color', brcolor)
    setStyle(searchbarbutton, 'background', sbcolor)
    setStyle(settingsbox, 'background', sbbgcolor)
    setStyle(settingsbox, 'border-color', sbbccolor)
}

function setStyle(element, styleval, value) {
    element.style[styleval] = value
}