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
    let newLead = `<a href="${inputEl.value}" target="_blank">${inputEl.value}</a>`
    leadsList.innerHTML += "<li>" + newLead + "</li>"
    inputEl.value = ''
}

inputBtn.addEventListener('click', addLead);
