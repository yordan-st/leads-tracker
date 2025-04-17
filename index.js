import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-75ea0-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

// let myLeads = []
// let storedLeads = JSON.parse(localStorage.getItem('myLeads'))

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
    // save it to db
    // localStorage.setItem('myLeads', JSON.stringify(local))
}

// function saveTab(local) {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         local.push(tabs[0].url)
//         let newLink = `<a href="${tabs[0].url}" target="_blank">${tabs[0].url}</a>`
//         leadsList.innerHTML += "<li>" + newLink + "</li>"
//         inputEl.value = ''
//         localStorage.setItem('myLeads', JSON.stringify(local))
//     })
// }

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
// tabBtn.addEventListener('click', () => saveTab(myLeads));
deleteBtn.addEventListener('click', () => clearLeads(myLeads));
