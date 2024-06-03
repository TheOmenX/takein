function displayError(message){

    let content = document.getElementById("content")

    let errorEl = document.createElement("div")
    errorEl.classList.add("error-message")
    errorEl.innerHTML = `
        Error: ${message}
    `

    content.appendChild(errorEl)
    setTimeout(() => errorEl.classList.add("active"), 100)
    setTimeout(() => errorEl.remove(), 5000)
}