let myLeads = []
let storedLeads = JSON.parse(localStorage.getItem('myLeads'))
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const tabBtn = document.getElementById('tab-btn')
const deleteBtn = document.getElementById('delete-btn')
const leadsList = document.getElementById('leads-list')

function renderItems(stored, local) {
    if(stored) {
        local = stored
        for(let i=0; i < local.length; i++) {
            let newLink = `<a href="${local[i]}" target="_blank">${local[i]}</a>`
            leadsList.innerHTML += "<li>" + newLink + "</li>"
        }
        console.log('rendered')
    } return
}

renderItems(storedLeads, myLeads)

function addLead(local) {
    if (!inputEl.value) {
        alert('Field is empty!')
        return
    }
    local.push(inputEl.value)
    let newLink = `<a href="${inputEl.value}" target="_blank">${inputEl.value}</a>`
    leadsList.innerHTML += "<li>" + newLink + "</li>"
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(local))
}

function logTabs() {
    console.log(tabs[0].url)
}

function clearLeads(local) {
    if(local.length > 0   ) {
        if(confirm('Do you want to delete all leads?')) {
            localStorage.clear()
            local = []
            leadsList.innerHTML = null
        } return
    } return
}

inputBtn.addEventListener('click', () => addLead(myLeads));
tabBtn.addEventListener('click', () => logTabs());
deleteBtn.addEventListener('click', () => clearLeads(myLeads));
