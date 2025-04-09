let myLeads = []
let leadsList = document.getElementById('leads-list')

function renderList(input) {
    for(let i=0; i < myLeads.length; i++) {
        const newLi = document.createElement("li")
        const newContent = document.createTextNode(`${input}`)
        newLi.appendChild(newContent)
        leadsList.appendChild(newLi)
    }
}

function addLead() {
    console.log('clicked')
    const inputEl = document.getElementById('input-el')
    myLeads.push(inputEl.value)
    renderList(inputEl.value)
}

document.getElementById('input-btn').addEventListener('click', addLead);
