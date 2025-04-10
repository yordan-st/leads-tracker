let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const leadsList = document.getElementById('leads-list')

function addLead() {
    if (!inputEl.value) {
        console.error('Field is empty!')
        return
    }
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
}

function renderLeads() {
    let listItems = ""
    for (let i=0; i < myLeads.length; i++) {
        listItems += '<li>' + myLeads[i] + '</li>'
    }
    leadsList.innerHTML = listItems
}

inputBtn.addEventListener('click', addLead);
