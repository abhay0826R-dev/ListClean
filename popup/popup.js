
function addjob(event) {
    event.preventDefault()
    console.log("Works")
}

function extensionToggleOff() {
    overlayWarning.classList.add("hidden")
    activeText.innerText = "ACTIVE"

    // change color
    activeText.classList.remove("red-activeText")
    activeText.classList.add("blue-activeText")
}

function extensionToggleOn() {
    overlayWarning.classList.remove("hidden")
    activeText.innerText = "INACTIVE"

    // change color
    activeText.classList.add("red-activeText")
    activeText.classList.remove("blue-activeText")
}

const activeCheckbox = document.getElementById("activeCheckBox")
const activeText = document.getElementById("active-state-text")
const overlayWarning = document.getElementById("site-warning-overlay")
const overlayWarningReason = document.getElementById("overlay-warning-reason")

// overlay blur warning 
activeCheckbox.addEventListener("change", function() {
console.log(activeText)

    if (activeCheckbox.checked) {
        extensionToggleOff()
    } else {
        extensionToggleOn()
    }
    overlayWarningReason.innerText = "Extension OFF!"
})