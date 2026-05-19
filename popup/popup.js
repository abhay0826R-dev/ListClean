
function addjob(event) {
    event.preventDefault()
    console.log("Works")
}

const activeCheckbox = document.getElementById("activeCheckBox")
const overlayWarning = document.getElementById("site-warning-overlay")
const overlayWarningReason = document.getElementById("overlay-warning-reason")

// overlay blur warning 
activeCheckbox.addEventListener("change", function() {
    if (activeCheckbox.checked) {
        overlayWarning.classList.add("hidden")
    } else {
        overlayWarning.classList.remove("hidden")
    }
    overlayWarningReason.innerText = "Extension OFF!"
})